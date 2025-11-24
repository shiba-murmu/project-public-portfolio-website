import React, { useState, useEffect, useRef } from "react";

/***
 * One issue is not solved for project options in the 
 * in the desktop page for navabar that color is not 
 * changing while scrolling every options .
 * 
 */


/**
 * ScrollToSection now optionally accepts setActiveSection to immediately mark clicked section active.
 */
function ScrollToSection(id, closeMenu, setActiveSection) {
    const el = document.getElementById(id);
    const header = document.getElementById("site-header");
    if (!el) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });

    if (typeof setActiveSection === "function") setActiveSection(id);
    if (closeMenu) closeMenu(false);
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0); // for smooth max-height animation
    const [activeSection, setActiveSection] = useState("home"); // normalized to lowercase
    const containerRef = useRef(null);
    const dropdownRef = useRef(null);
    const observerRef = useRef(null);

    // Keep header space so fixed header doesn’t overlap content
    useEffect(() => {
        const setBodyPadding = () => {
            const header = document.getElementById("site-header");
            if (!header) return;
            document.body.style.paddingTop = `${header.offsetHeight}px`;
        };

        setBodyPadding();
        window.addEventListener("resize", setBodyPadding);

        return () => {
            window.removeEventListener("resize", setBodyPadding);
            document.body.style.paddingTop = "";
        };
    }, []);

    // Close menu on desktop resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        function onDocClick(e) {
            if (!menuOpen) return;
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, [menuOpen]);

    // Measure dropdown content and set max-height for smooth open/close
    useEffect(() => {
        if (!dropdownRef.current) {
            setDropdownHeight(0);
            return;
        }

        const el = dropdownRef.current;
        const measure = () => {
            const nav = el.querySelector("nav");
            if (!nav) return;
            const h = nav.scrollHeight;
            const maxAllowed = Math.floor(window.innerHeight * 0.6);
            setDropdownHeight(Math.min(h, maxAllowed));
        };

        if (menuOpen) {
            measure();
            window.addEventListener("resize", measure);
        } else {
            setDropdownHeight(0);
        }

        return () => {
            window.removeEventListener("resize", measure);
        };
    }, [menuOpen]);

    // IntersectionObserver to update activeSection on scroll
    useEffect(() => {
        const sections = ["home", "about", "project", "skills", "experience", "footer"];
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const handleIntersections = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // entry.target.id is the section's id (already lowercase if you used lowercase)
                    setActiveSection(entry.target.id);
                }
            });
        };

        // If elements don't exist yet, retry for up to ~5 times spaced by 200ms
        let attempts = 0;
        const maxAttempts = 6;
        let pollTimer = null;

        const trySetupObserver = () => {
            const found = sections
                .map((id) => document.getElementById(id))
                .filter(Boolean);

            if (found.length > 0) {
                // create and observe
                observerRef.current = new IntersectionObserver(handleIntersections, observerOptions);
                sections.forEach((id) => {
                    const el = document.getElementById(id);
                    if (el) observerRef.current.observe(el);
                });
            } else {
                attempts += 1;
                if (attempts < maxAttempts) {
                    pollTimer = setTimeout(trySetupObserver, 200);
                } else {
                    // give up silently — sections probably mounted later by route; we could observe later
                }
            }
        };

        trySetupObserver();

        return () => {
            if (pollTimer) clearTimeout(pollTimer);
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, []);

    // helper to click + highlight
    const handleClick = (id) => {
        // scroll (this closes mobile menu if setMenuOpen passed in) and mark active
        ScrollToSection(id, setMenuOpen, setActiveSection);
        // ensure immediate visual feedback even if scroll hasn't reached section yet
        setActiveSection(id);
    };

    return (
        <div ref={containerRef} className="relative">
            <div
                id="site-header"
                className="fixed top-0 left-0 right-0 z-50 py-1 flex justify-between items-center shadow-md bg-(--bg-color)"
            >
                {/* name */}
                <div className="py-3 md:py-4 pl-3 md:pl-15 text-2xl ">Portfolio</div>

                {/* hamburger icon */}
                <button
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((s) => !s)}
                    className="md:hidden py-3 pr-3 w-12 h-12 flex items-center justify-center"
                    type="button"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-(--text-color) hover:fill-white transition duration-300" height="34" viewBox="0 -960 960 960" width="34">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" className="fill-(--text-color) hover:fill-white transition duration-300">
                            <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                        </svg>
                    )}
                </button>

                {/* desktop menu */}
                <div className="hidden md:flex space-x-8 p-4 text-lg">
                    <div
                        onClick={() => handleClick("home")}
                        className={`cursor-pointer hover:text-(--text-color) transition duration-300 ${activeSection === "home" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        Home
                    </div>
                    <div
                        onClick={() => handleClick("about")}
                        className={`cursor-pointer hover:text-(--text-color)  transition duration-300 ${activeSection === "about" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        About me
                    </div>
                    <div
                        onClick={() => handleClick("project")}
                        className={`cursor-pointer hover:text-(--text-color)  transition duration-300 ${activeSection === "project" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        Projects
                    </div>
                    <div
                        onClick={() => handleClick("skills")}
                        className={`cursor-pointer hover:text-(--text-color) transition duration-300 ${activeSection === "skills" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        Skills
                    </div>
                    <div
                        onClick={() => handleClick("experience")}
                        className={`cursor-pointer hover:text-(--text-color)  transition duration-300 ${activeSection === "experience" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        Experience
                    </div>
                    <div
                        onClick={() => handleClick("footer")}
                        className={`cursor-pointer hover:text-(--text-color)  transition duration-300 ${activeSection === "footer" ? "text-white font-semibold" : "text-(--muted-text)"} `}
                    >
                        Contact
                    </div>
                </div>

                {/* MOBILE DROPDOWN — animated with max-height + opacity */}
                <div
                    ref={dropdownRef}
                    className="md:hidden absolute left-0 right-0 top-full z-50 shadow-lg bg-(--bg-color) transition-all duration-300 overflow-hidden"
                    // apply animated styles from state
                    style={{
                        maxHeight: dropdownHeight ? `${dropdownHeight}px` : 0,
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
                    }}
                >
                    <nav className="flex flex-col items-center justify-center p-4 space-y-5 bg-(--footer-background) text-lg rounded-b-3xl">
                        <button
                            onClick={() => { ScrollToSection("home", setMenuOpen, setActiveSection); }}
                            className={`w-full text-center ${activeSection === "home" ? "text-white font-semibold" : ""}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => { ScrollToSection("about", setMenuOpen, setActiveSection); }}
                            className={`w-full text-center ${activeSection === "about" ? "text-white font-semibold" : ""}`}
                        >
                            About me
                        </button>
                        <button
                            onClick={() => { ScrollToSection("project", setMenuOpen, setActiveSection); }}
                            className={`w-full text-center ${activeSection === "project" ? "text-white font-semibold" : ""}`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => { ScrollToSection("skills", setMenuOpen, setActiveSection); }}
                            className={`w-full hidden md:block text-center ${activeSection === "skills" ? "text-white font-semibold" : ""}`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => { ScrollToSection("skills", setMenuOpen, setActiveSection); /* duplicate mobile label retained per your code */ }}
                            className={`w-full text-center ${activeSection === "skills" ? "text-white font-semibold" : ""}  md:hidden`}
                        >
                            Technical skills
                        </button>
                        <button
                            onClick={() => { ScrollToSection("experience", setMenuOpen, setActiveSection); }}
                            className={`w-full text-center ${activeSection === "experience" ? "text-white font-semibold" : ""}`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => { ScrollToSection("footer", setMenuOpen, setActiveSection); }}
                            className={`w-full text-center ${activeSection === "footer" ? "text-white font-semibold" : ""}`}
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
