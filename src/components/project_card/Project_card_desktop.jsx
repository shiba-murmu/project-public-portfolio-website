// ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Project_card_desktop = ({
    path,
    title = "Project Title",
    tech = ["HTML", "CSS", "JS"],
    description = "Project description goes here",
    reverse = false, // if true, image will be on the right on md+
}) => {
    // Order classes for grid children on md and up
    const imgOrder = reverse ? "md:order-2" : "md:order-1";
    const contentOrder = reverse ? "md:order-1" : "md:order-2";

    return (
        <div className="w-full h-[90vh] md:h-[60vh]">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-(--border-color) overflow-hidden">
                {/* Image column */}
                <div
                    className={`${imgOrder} flex justify-center items-center bg-(--card-bg)`}
                >
                    <div className="w-full h-full max-h-full">
                        {/* Use an aspect-ratio wrapper so images behave consistently */}
                        <div className="h-full w-full">
                            <img
                                src={path}
                                alt={title}
                                className="h-full w-full object-cover object-center"
                            // object-cover makes sure the image fills the column
                            />
                        </div>
                    </div>
                </div>

                {/* Content column */}
                <div
                    className={`${contentOrder} flex flex-col p-8 md:p-12 bg-(--footer-background)`}
                >
                    <header className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-(--bluish)">
                            {title}
                        </h2>
                        <div className="mt-2 text-(--muted-text) text-sm md:text-base">
                            <span className="font-semibold">Tech used:</span>
                            <ul className="inline pl-3 ml-2 list-disc">
                                {tech.map((t, i) => (
                                    <li key={i} className="inline mr-2 list-inside">
                                        {t}
                                        {i < tech.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </header>

                    <main className="flex-grow">
                        <p className="text-lg md:text-base text-(--muted-text) leading-relaxed">
                            {description}
                        </p>
                    </main>

                    <footer className="mt-6 flex gap-4">
                        <Link to="/project-details" className="mt-auto">
                            <button className="px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-semibold hover:shadow-lg">
                                Details
                            </button>
                        </Link>

                        <a
                            href="#"
                            className="mt-auto"
                        // replace href with your code url
                        >
                            <button className="px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-medium hover:shadow-lg">
                                Code
                            </button>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto"
                        >
                            <button className="px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-medium hover:shadow-lg">
                                Live
                            </button>
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Project_card_desktop;
