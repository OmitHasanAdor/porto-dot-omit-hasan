"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactInfo } from "@/data/contact";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    // FormData থেকে ডাটা অবজেক্ট তৈরি করা
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // 🎯 আপনার ব্যাকএন্ড ইউআরএল (লোকালের জন্য http://localhost:5000/api/message)
      // প্রোডাকশনে ডিলয় করলে সেই ডোমেইনটি এখানে বসাবেন
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
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">Let&apos;s Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s work together</h3>
            <p className="text-gray-400 mb-8">
              Feel free to contact me for freelance projects, collaborations or remote jobs.
            </p>

            <div className="space-y-5">
              <Link href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyan-400">
                <MdEmail size={24} />
                ibneshams05@gmail.com
              </Link>
              <Link href={contactInfo.github} target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400">
                <FaGithub size={24} />
                GitHub
              </Link>
              <Link href={contactInfo.linkedin} target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400">
                <FaLinkedin size={24} />
                LinkedIn
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#0d0d0d] p-4 rounded-xl border border-white/10">
                <p className="text-gray-400 text-sm">Availability</p>
                <h4 className="text-white font-semibold">{contactInfo.availability}</h4>
              </div>
              <div className="bg-[#0d0d0d] p-4 rounded-xl border border-white/10">
                <p className="text-gray-400 text-sm">Response Time</p>
                <h4 className="text-white font-semibold">{contactInfo.responseTime}</h4>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500"
            />
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 cursor-pointer rounded-full bg-cyan-500 text-black font-semibold disabled:bg-cyan-700 disabled:cursor-not-allowed transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}