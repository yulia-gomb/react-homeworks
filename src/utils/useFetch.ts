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
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseBody = await response.json();

                const logEntry = {
                    url,
                    payload: options.body || null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };
                const existingLogs = JSON.parse(localStorage.getItem("apiLogs") || "[]");
                localStorage.setItem("apiLogs", JSON.stringify([...existingLogs, logEntry]));

                setData(responseBody);
            } catch (err: unknown) {
                console.error('Caught error:', err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;