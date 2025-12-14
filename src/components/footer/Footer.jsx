import React, { useState } from "react";
import { socialLinks } from "../../hooks/detailed_data";
import { portfolioInfo } from "../../hooks/detailed_data";
/**
 * Footer.jsx
 * - Keeps your color variables intact (uses your --* CSS vars)
 * - Improved UX: copy-email, accessible social links, smooth header-aware scrolling
 */

function scrollToSection(id) {
    const el = document.getElementById(id);
    const header = document.getElementById("site-header");
    if (!el) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const email = portfolioInfo.email;
    const subject = "Portfolio Inquiry";
    const body = `Hello ${portfolioInfo.firstname},

    I came across your portfolio and I'm impressed with your work. I would love to discuss potential collaboration opportunities.

    Best regards,
    [Your Name]`;

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback: open mailto if clipboard not available
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <footer
            id="footer"
            className="rounded-t-3xl p-6 md:p-12 md:mt-20 border-t border-(--muted-text) bg-(--footer-background)"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-6xl mx-auto">
                {/* Top call-to-action */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col gap-4">
                        <p className="text-(--muted-text) text-sm font-medium">CONTACT</p>
                        <h2 id="footer-heading" className="text-3xl md:text-5xl font-bold leading-tight">
                            Let’s talk about your next project
                        </h2>

                        <p className="text-(--muted-text) mt-2">
                            I build clean, maintainable web apps. If you’ve got a problem to solve, I’ve got a stack that ships.
                        </p>

                        {/* Email action */}
                        <div className="mt-4 flex flex-col md:flex-row  items-center gap-3">

                            <button
                                onClick={handleCopyEmail}
                                className="hidden md:inline-flex items-center gap-3 px-4 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color) focus:outline-none focus:ring-2 focus:ring-(--exception-button-border)"
                                aria-label={`Copy email ${email}`}
                                title="Copy email"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
                                    <path d="M3 7a2 2 0 012-2h8a2 2 0 012 2v2h-2V7H5v10h6v2H5a2 2 0 01-2-2V7z" fill="currentColor" />
                                    <path d="M21 11v8a2 2 0 01-2 2H9a2 2 0 01-2-2V11a2 2 0 012-2h10a2 2 0 012 2z" fill="currentColor" />
                                </svg>
                                <span className="text-sm font-medium">{email}</span>
                            </button>
                            
                            <a
                                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                className="inline-flex md:hidden items-center gap-3 px-4 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color) focus:outline-none focus:ring-2 focus:ring-(--exception-button-border)"
                                aria-label={`Copy email ${email}`}
                                title="Copy email"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
                                    <path d="M3 7a2 2 0 012-2h8a2 2 0 012 2v2h-2V7H5v10h6v2H5a2 2 0 01-2-2V7z" fill="currentColor" />
                                    <path d="M21 11v8a2 2 0 01-2 2H9a2 2 0 01-2-2V11a2 2 0 012-2h10a2 2 0 012 2z" fill="currentColor" />
                                </svg>
                                <span className="text-sm font-medium">{email}</span>
                            </a>


                            <a
                                className="md:hidden inline-flex items-center gap-3 px-6 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color) focus:outline-none focus:ring-2 focus:ring-(--exception-button-border) text-sm"
                                href={`mailto:${email}?subject=Hello&body=I%20want%20to%20hire%20you`}
                                aria-label="Send email"
                            >
                                Email me
                            </a>

                            <div
                                role="status"
                                aria-live="polite"
                                className="text-sm text-(--muted-text) ml-2"
                            >
                                {copied ? "Copied!" : ""}
                            </div>
                        </div>
                    </div>

                    {/* Quick links & information */}
                    <div className="grid grid-cols-2 gap-6">
                        <nav aria-label="Quick links">
                            <h3 className="text-(--muted-text) text-sm mb-3">Quick Links</h3>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("home")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("about")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        About me
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("project")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("skills")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        Technical skills
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("experience")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        Experience
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("footer")}
                                        className="text-left hover:underline text-(--text-color) focus:outline-none"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <div>
                            <h3 className="text-(--muted-text) text-sm mb-3">Information</h3>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a className="hover:underline text-(--text-color)" href="/terms">Terms & Services</a>
                                </li>
                                <li>
                                    <a className="hover:underline text-(--text-color)" href="/privacy">Privacy policy</a>
                                </li>
                                <li>
                                    <a className="hover:underline text-(--text-color)" href="/cookies">Cookie settings</a>
                                </li>
                            </ul>

                            {/* Social icons */}
                            <div className="mt-6">
                                <h4 className="text-(--muted-text) text-sm mb-2">Follow</h4>
                                <div className="flex items-center jistify-center gap-0">
                                  

                                    <a
                                        href={socialLinks.linkedin}
                                        aria-label="LinkedIn"
                                        className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-(--border-color)"
                                    >
                                        {/* Linked in */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-(--text-color) h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                    </a>

                                   
                                    <a
                                        href={socialLinks.github}
                                        aria-label="GitHub"
                                        className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-(--border-color)"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-(--text-color)">
                                            <path d="M12 .5A11.5 11.5 0 001.5 12.1c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.3-3.9-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8 1 1.8 1 1.1 1.9 3.1 1.4 3.9 1.1.1-.8.4-1.4.8-1.8-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.7.1-3.6 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0C18 4 19 4.3 19 4.3c.6 1.9.2 3.3.1 3.6.8.9 1.2 2 1.2 3.2 0 4.6-2.6 5.6-5.1 5.9.5.5.9 1.4.9 2.9v4.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8A11.5 11.5 0 0012 .5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-(--border-color) flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-(--muted-text)">© PORTFOLIO 2025. ALL RIGHTS RESERVED</div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-sm underline-offset-2 hover:underline text-(--text-color) focus:outline-none"
                        >
                            Back to top
                        </button>

                        <div className="text-sm text-(--muted-text)">Made with care</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
