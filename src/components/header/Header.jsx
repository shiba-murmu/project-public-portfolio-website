import React, { useState, useEffect, useRef } from "react";

function ScrollToSection(id, closeMenu) {
    const el = document.getElementById(id);
    const header = document.getElementById("site-header");
    if (!el) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
    if (closeMenu) closeMenu(false);
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);
    const dropdownRef = useRef(null);

  

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

    return (
        <div ref={containerRef} className="relative">
            <div
                id="site-header"
                className="fixed top-0 left-0 right-0 z-50 py-1 flex justify-between items-center shadow-md bg-(--bg-color)"
            >
                {/* name */}
                <div className="py-3 md:py-4 pl-3 md:pl-15 text-2xl ">
                    Portfolio
                </div>

                {/* hamburger icon */}
                <button
                    aria-label="Toggle menu"
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
                    <div onClick={() => ScrollToSection("Home")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">Home</div>
                    <div onClick={() => ScrollToSection("About")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">About</div>
                    <div onClick={() => ScrollToSection("project")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">Projects</div>
                    <div onClick={() => ScrollToSection("skills")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">Skills</div>
                    <div onClick={() => ScrollToSection("experience")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">Experience</div>
                    <div onClick={() => ScrollToSection("contact")} className="cursor-pointer text-(--muted-text) hover:text-white transition duration-300">Contact</div>
                </div>

                {/* MOBILE DROPDOWN — stays glued under fixed header */}
                {menuOpen && (
                    <div
                        ref={dropdownRef}
                        className="md:hidden absolute left-0 right-0 top-full z-50 shadow-lg bg-(--bg-color) transition duration-300"
                        style={{ maxHeight: "60vh", overflowY: "auto" }}
                    >
                        <nav className="flex flex-col items-center justify-center p-4 space-y-5 bg-(--footer-background) text-lg rounded-b-3xl">
                            <button onClick={() => ScrollToSection("Home", setMenuOpen)} className="w-full">Home</button>
                            <button onClick={() => ScrollToSection("About", setMenuOpen)} className="w-full">About</button>
                            <button onClick={() => ScrollToSection("project", setMenuOpen)} className="w-full">Projects</button>
                            <button onClick={() => ScrollToSection("skills", setMenuOpen)} className="w-full">Skills</button>
                            <button onClick={() => ScrollToSection("experience", setMenuOpen)} className="w-full">Experience</button>
                            <button onClick={() => ScrollToSection("contact", setMenuOpen)} className="w-full">Contact</button>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
