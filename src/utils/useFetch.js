import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                const responseBody = await response.json();

                const logEntry = {
                    url,
                    payload: options.body || null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };
                const existingLogs = JSON.parse(localStorage.getItem("apiLogs")) || [];
                localStorage.setItem("apiLogs", JSON.stringify([...existingLogs, logEntry]));

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setData(responseBody);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;
