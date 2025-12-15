import React from "react";
import Text from "../../components/customtext/Text";
import useAos from "../../hooks/useAos";
import { workExperience } from "../../hooks/detailed_data";

export default function Education_experience() {
    // Initialize AOS
    useAos({ duration: 700, easing: "ease-out", once: true }, []);

    // Reusable chip
    const Chip = ({ children }) => (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[rgba(255,255,255,0.02)] border border-(--border-color)">
            {children}
        </span>
    );

    return (
        <div
            id="experience"
            className="pt-10 md:pt-12 flex flex-col items-center gap-5"
        >
            {/* Section title */}
            <div
                className="w-full md:pl-40 flex justify-center md:justify-start"
                data-aos="fade-right"
                data-aos-delay="80"
            >
                <Text text={"Education & Experience"} />
            </div>

            {/* Heading */}
            <div className="w-[90%] md:w-[75%] flex items-center gap-4 mb-6">
                <div
                    className="p-3 rounded-lg bg-(--button-background) border border-(--border-color)"
                    data-aos="zoom-in"
                    data-aos-delay="120"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="var(--button-text-color)"
                        />
                    </svg>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-bold">Experience</h3>
                    <p className="text-sm text-(--muted-text) mt-1">
                        Work history and technologies used
                    </p>
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-4 gap-6 w-[90%] md:w-[75%]">
                {/* Timeline */}
                <aside className="col-span-1">
                    <div className="sticky top-24">
                        <p className="text-(--muted-text) mb-4">Timeline</p>

                        <div className="relative pl-6">
                            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-(--border-color)" />

                            {workExperience.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="relative mb-8"
                                    data-aos="fade-right"
                                    data-aos-delay={200 + index * 60}
                                >
                                    <div className="w-6 h-6 rounded-full bg-(--button-background) border border-(--border-color) flex items-center justify-center text-xs">
                                        {index + 1}
                                    </div>

                                    <div className="ml-10 mt-1 text-sm text-(--muted-text)">
                                        {item.timeperiod}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Experience cards */}
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workExperience.map((item, index) => (
                        <article
                            key={item.id}
                            className="flex flex-col bg-(--footer-background) border border-(--border-color) rounded-2xl p-6 min-h-[220px]"
                            data-aos="fade-up"
                            data-aos-delay={220 + index * 80}
                        >
                            <header className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="text-lg font-bold">{item.institute}</h4>
                                    <p className="text-sm text-(--muted-text) mt-1">
                                        {item.title}
                                    </p>
                                </div>
                                <span className="text-sm text-(--muted-text)">
                                    {item.timeperiod}
                                </span>
                            </header>

                            <main className="mt-3 flex-1">
                                <p className="text-md text-(--muted-text) leading-relaxed">
                                    {item.description}
                                </p>
                            </main>

                            <footer className="mt-4 flex flex-wrap gap-2">
                                {item.tech_stack.map((tech, i) => (
                                    <Chip key={i}>{tech}</Chip>
                                ))}
                            </footer>
                        </article>
                    ))}
                </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden w-full mt-6">
                <div className="w-full px-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                    {workExperience.map((item, index) => (
                        <div
                            key={item.id}
                            className="inline-block w-80 h-70 bg-(--footer-background) rounded-xl m-2 p-4 align-top"
                            data-aos="fade-up"
                            data-aos-delay={260 + index * 80}
                        >
                            <h3 className="text-lg font-bold border-b border-(--border-color) pb-2">
                                {item.institute}
                            </h3>

                            <p className="text-sm text-(--muted-text) mt-2">
                                {item.title}
                            </p>

                            <p className="text-sm text-(--muted-text) mt-3">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.tech_stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md text-xs bg-[rgba(255,255,255,0.02)] border border-(--border-color)"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="mt-4 text-sm text-(--muted-text)">
                                Time: {item.timeperiod}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
