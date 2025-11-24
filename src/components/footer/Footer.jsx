import React, { useState } from "react";

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

    const email = "shibamurmu001@gmail.com";

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
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color) focus:outline-none focus:ring-2 focus:ring-(--exception-button-border)"
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
                                className="md:hidden inline-flex items-center gap-3 px-6 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color) focus:outline-none focus:ring-2 focus:ring-(--exception-button-border)"
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
                                <div className="flex items-center ">
                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-(--border-color)"
                                    >
                                        {/* Facebook icon */}
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-(--text-color) h-5 w-5"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                                    </a>

                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-(--border-color)"
                                    >
                                        {/* Linked in */}
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-(--text-color)" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                    </a>

                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-(--border-color)"
                                    >
                                        {/* Instagram */}
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="text-(--text-color) h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                                    </a>

                                    <a
                                        href="#"
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
