"use client";

import { useAuthiumCallback } from "authium-next";

export default function CallbackPage() {
    const { loading, error } = useAuthiumCallback();
    if (loading) return <div>Logging you in...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Callback Page</h1>
            <p>You have been logged in successfully!</p>
            <a href="/">Go to Home</a>
        </div>
    )
}