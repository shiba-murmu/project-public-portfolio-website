import React from 'react'
import Text from '../../components/customtext/Text'
import useAos from '../../hooks/useAos' // added AOS hook import

const data_box = [
    {
        title: 'Programming Languages',
        list: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Dart']
    },
    {
        title: 'Frameworks & Libraries',
        list: ['Django', 'React', 'Tailwind CSS', 'Bootstrap', 'Node.js']
    },
    {
        title: 'Database',
        list: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
        title: 'Tools & Others',
        list: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Photoshop']
    }
]

export default function Skills() {
    // initialize AOS
    useAos({ duration: 700, easing: 'ease-out', once: true }, [])

    return (
        <section
            id="skills"
            className="min-h-screen py-16 px-6 md:px-12  text-(--text-color) flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="80"
        >
            {/* Header */}
            <div className="w-full max-w-6xl">
                <div className="flex items-center gap-4 mb-8" data-aos="fade-right" data-aos-delay="120">
                    <div className="p-3 rounded-lg bg-(--button-background)  shadow-lg" data-aos="zoom-in" data-aos-delay="160">
                        {/* simple badge icon */}
                        <svg width="28" height="28" className='animate-spin' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--button-text-color)" />
                        </svg>
                    </div>


                    <div data-aos="fade-left" data-aos-delay="200">
                        <Text text={'Technical Skills'} />
                        <p className="text-sm text-(--muted-text) mt-1">Technologies I use to build things — practical and battle-tested.</p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left column: highlighted summary card */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="240">
                        <div className="h-full flex flex-col gap-4 bg-[rgba(255,255,255,0.03)] border border-(--border-color) rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold">Core Focus</h3>
                            <p className="text-(--muted-text)">I solve problems with clean architecture and readable code. I favour tools that ship fast and scale well.</p>

                            <div className="mt-4">
                                <h4 className="font-semibold mb-2">Primary stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Django', 'Tailwind CSS', 'PostgreSQL'].map((t, i) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 rounded-full text-sm bg-[rgba(255,255,255,0.04)] border border-(--border-color)"
                                            data-aos="fade-up"
                                            data-aos-delay={280 + i * 40}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <a href="#footer" className="inline-block px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-semibold shadow-md" data-aos="zoom-in" data-aos-delay="420">Let's talk</a>
                            </div>
                        </div>
                    </div>

                    {/* Right column: skill cards */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data_box.map((box, idx) => (
                            <article
                                key={idx}
                                className="flex flex-col h-full rounded-xl p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] border border-(--border-color) hover:bg-[rgba(255,255,255,0.03)] transform hover:-translate-y-1 transition-all duration-250"
                                data-aos="fade-up"
                                data-aos-delay={300 + idx * 80}
                            >
                                <header className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-semibold">{box.title}</h4>
                                    <div className="text-sm text-(--muted-text)"> {box.list.length} items</div>
                                </header>

                                <ul className="flex-1 grid grid-cols-2 gap-2 overflow-auto pr-2">
                                    {box.list.map((li, i) => (
                                        <li
                                            key={i}
                                            className="text-sm p-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-(--border-color) flex items-center gap-2"
                                            data-aos="fade-right"
                                            data-aos-delay={360 + idx * 50 + i * 30}
                                        >
                                            {/* small check icon */}
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="truncate">{li}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
