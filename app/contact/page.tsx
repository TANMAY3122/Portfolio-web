"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const page = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        const { from_name, from_email, message } = form.current
            .elements as typeof form.current.elements & {
                from_name: HTMLInputElement;
                from_email: HTMLInputElement;
                message: HTMLTextAreaElement;
            };

        if (!from_name.value || !from_email.value || !message.value) {
            toast.error("Please fill all the fields.");
            return;
        }

        setIsSubmitting(true);
        emailjs
            .sendForm(
                "service_rqd4lmr",
                "template_zpezhsa",
                form.current,
                "tpUN_8Hqr7KViPvI2"
            )
            .then(
                (result) => {
                    form.current?.reset();
                    toast.success("Email sent successfully");
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Failed to send email.");
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className="flex flex-col gap-4">
            <span>Let's get in touch and talk about your next project or idea.</span>
            <form
                ref={form as React.RefObject<HTMLFormElement>}
                onSubmit={sendEmail}
                className="flex flex-col gap-3 items-center"
            >
                <Input
                    className="w-full"
                    type="text"
                    name="from_name"
                    id="from_name"
                    placeholder="Name"
                />
                <Input
                    className="w-full"
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="Email"
                />
                <Textarea id="message" placeholder="Message" name="message" />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Email"}
                </Button>
                <span>Or you can schedule a meeting with me</span>
                <Button>
                    <a
                        href="https://cal.com/tanmay-kashyap"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let's Talk
                    </a>
                </Button>
            </form>
        </div>
    );
};

export default page;
