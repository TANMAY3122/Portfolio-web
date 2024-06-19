"use client";

import React from "react";
import axios from "axios";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const NewsLetter = () => {
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        if (!email) return toast.error("Email is required");
        setLoading(true);
        try {
            await axios.post("/api/newsletter", { email });
            setEmail("");
            toast.success("Subscribed successfully");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mt-14 flex flex-col gap-4">
            <Title title="Join our newsletter" />
            <div>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Subscribe to our newsletter and get the latest news and updates
                    straight into your inbox.
                </p>
                <div className="flex  gap-4 mt-4 items-center">
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email Address"
                    />
                    <Button onClick={handleSubscribe}>
                        {loading ? "Subscribing..." : "Subscribe"}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
