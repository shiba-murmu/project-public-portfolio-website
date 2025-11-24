import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
function ScrollToSection(id, closeMenu) {
    const el = document.getElementById(id);
    const header = document.getElementById("site-header");
    if (!el) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
    if (closeMenu) closeMenu(false);
}

function CustomHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0); // for smooth max-height animation
    const containerRef = useRef(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    function toggleMenu() {
        // This function will redirect to home page.
        navigate("/");
    }

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
            // measure the scrollHeight of the nav content
            const nav = el.querySelector("nav");
            if (!nav) return;
            const h = nav.scrollHeight;
            // set a reasonable max (60vh) if content is tall
            const maxAllowed = Math.floor(window.innerHeight * 0.6);
            setDropdownHeight(Math.min(h, maxAllowed));
        };

        // measure right away when opening
        if (menuOpen) {
            measure();
            // also re-measure on resize (in case viewport changes)
            window.addEventListener("resize", measure);
        } else {
            // closing -> set to 0 to animate
            setDropdownHeight(0);
        }

        return () => {
            window.removeEventListener("resize", measure);
        };
    }, [menuOpen]);

    return (
        <div ref={containerRef} className="relative">
            <div
                id="site-header"
                className="fixed top-0 left-0 right-0 z-50 py-1 flex justify-between items-center shadow-md bg-(--bg-color) transition duration-300 ease-in-out"
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
                

                {/* MOBILE DROPDOWN — animated with max-height + opacity */}
                <div
                    ref={dropdownRef}
                    className="md:hidden absolute left-0 right-0 top-full z-50 shadow-lg bg-(--bg-color) border-b rounded-b-4xl transition-all border-(--muted-text)  duration-300 overflow-hidden"
                    // apply animated styles from state
                    style={{
                        maxHeight: dropdownHeight ? `${dropdownHeight}px` : 0,
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
                    }}
                >
                    <nav className="flex flex-col items-center justify-center p-4 space-y-5  text-lg">
                        <button onClick={() => toggleMenu()} className="w-full">Home</button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default CustomHeader;