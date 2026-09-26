"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactInfo } from "@/data/contact";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://portfolio-server-and-module-63-5.vercel.app/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Contact Me</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Let&apos;s work together</h3>
            <p className="mb-8 text-muted-foreground">
              Feel free to contact me for freelance projects, collaborations or remote jobs.
            </p>

            <div className="space-y-5">
              <Link
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
              >
                <MdEmail size={22} />
                {contactInfo.email}
              </Link>
              <Link
                href={contactInfo.github}
                target="_blank"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
              >
                <FaGithub size={22} />
                GitHub
              </Link>
              <Link
                href={contactInfo.linkedin}
                target="_blank"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
              >
                <FaLinkedin size={22} />
                LinkedIn
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Availability</p>
                <h4 className="font-semibold text-foreground">{contactInfo.availability}</h4>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Response Time</p>
                <h4 className="font-semibold text-foreground">{contactInfo.responseTime}</h4>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-card p-4 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-border bg-card p-4 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-border bg-card p-4 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
            />

            <Button type="submit" disabled={loading} variant="glass" size="lg" className="w-full sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && <p className="mt-2 text-green-400">Message sent successfully!</p>}
            {error && <p className="mt-2 text-red-400">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
