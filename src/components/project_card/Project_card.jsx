import React from 'react'
import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos' // added AOS hook

export default function Project_card({
    title = 'Career Lift System',
    image = 'https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322',
    tech = ['HTML', 'CSS', 'JavaScript'],
    description = 'A responsive hotel management UI with booking flow, admin dashboard and room management features.',
    detailsLink = '/project-details',
    codeLink = '#',
    liveLink = '#',
}) {
    // initialize AOS
    useAos({ duration: 700, easing: 'ease-out', once: true }, [])

    return (
        <article
            className="md:hidden m-4 rounded-xl overflow-hidden shadow-md bg-(--footer-background) border border-(--border-color) h-[70vh]"
            data-aos="fade-up"
            data-aos-delay="120"
        >
            {/* Image header */}
            <div
                className="w-full h-44 relative bg-[rgba(0,0,0,0.04)]"
                data-aos="zoom-in"
                data-aos-delay="160"
            >
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
                {/* overlay title */}
                <div className="absolute left-4 bottom-3 bg-[rgba(0,0,0,0.35)] backdrop-blur-lg px-3 py-1 rounded-full" data-aos="fade-right" data-aos-delay="200">
                    <h4 className="text-sm font-semibold text-(--button-text-color)">{title}</h4>
                </div>
            </div>

            {/* content */}
            <div
                className="p-4 flex flex-col h-[calc(100%-11rem)]"
                data-aos="fade-up"
                data-aos-delay="220"
            >
                <div className="flex items-center gap-2 mb-3">
                    {tech.slice(0, 4).map((t, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,0.02)] border border-(--border-color)"
                            data-aos="fade-right"
                            data-aos-delay={240 + i * 40}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-(--muted-text) leading-relaxed line-clamp-4 mb-3">{description}</p>

                {/* optional short meta row */}
                <div className="flex items-center justify-between text-xs text-(--muted-text) mb-3">
                    <div>Role: <span className="text-(--text-color) font-medium">Frontend</span></div>
                    <div>Duration: <span className="text-(--text-color) font-medium">2 weeks</span></div>
                </div>

                {/* action buttons - pinned to bottom */}
                <div className="mt-auto flex gap-3" data-aos="fade-up" data-aos-delay="360">
                    <Link to={detailsLink} className="flex-1">
                        <button className="w-full px-4 py-2 rounded-md font-semibold bg-(--button-background) text-(--button-text-color)">Details</button>
                    </Link>

                    <a href={codeLink} className="flex-1">
                        <button className="w-full px-4 py-2 rounded-md border border-(--border-color) text-(--text-color)">Code</button>
                    </a>

                    <a href={liveLink} target="_blank" rel="noreferrer" className="flex-1">
                        <button className="w-full px-4 py-2 rounded-md bg-[rgba(255,255,255,0.03)] text-(--text-color)">Live</button>
                    </a>
                </div>
            </div>
        </article>
    )
}
