import { useState, useEffect } from "react";

interface FetchOptions extends RequestInit {
    body?: any;
}

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetch = <T>(url: string, options: FetchOptions = {}): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);

                const logEntry = {
                    url,
                    payload: options.body || null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };
                const existingLogs = JSON.parse(<string>localStorage.getItem("apiLogs")) || [];
                localStorage.setItem("apiLogs", JSON.stringify([...existingLogs, logEntry]));

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const responseBody = await response.json();

                if (!isCancelled) {
                    setData(responseBody);
                }
            } catch (err: any) {
                if (!isCancelled) {
                    setError(err.message);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
