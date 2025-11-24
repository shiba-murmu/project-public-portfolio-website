import React from 'react'

const Education = () => {
    const data = [
        {
            degree: "Bachelor of Technology",
            branch: "Computer Science and Engineering",
            institute: "Maryland Institute of Technology and management",
            location: "Jamshedpur, Jharkhand",
            duration: "2021 - 2025",
            cgpa: "8.4",
            percentage: "83%"
        },
        {
            degree: "Intermediate +2",
            branch: "Science",
            institute: "Kendriya Vidyalaya No.1",
            location: "Jamshedpur, Jharkhand",
            duration: "2019 - 2020",
            cgpa: "NILL",
            percentage: "83%"
        },
        {
            degree: "Matriculation",
            branch: "NILL",
            institute: "Kendriya Vidyalaya No.1",
            location: "Jamshedpur, Jharkhand",
            duration: "2009 - 2019",
            cgpa: "NILL",
            percentage: "83%"
        }
    ]

    const Badge = ({ children }) => (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[rgba(255,255,255,0.03)] border border-(--border-color)">{children}</div>
    )

    const EducationCard = ({ item, align = 'left' }) => {
        // align -> 'left' or 'right' to alternate layout on large screens
        const contentOrder = align === 'left' ? 'md:order-1' : 'md:order-2'
        const timelineOrder = align === 'left' ? 'md:order-2' : 'md:order-1'

        return (
            <div className={`w-full flex flex-col md:flex-row items-stretch gap-6`}>
                {/* content block */}
                <div className={`flex-1 flex ${contentOrder} ${align === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <div className="bg-(--footer-background) border border-(--border-color) rounded-2xl p-6 md:p-10 w-full max-w-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold">{item.degree}</h3>
                                <div className="mt-1 text-sm text-(--muted-text)">{item.branch}</div>
                            </div>
                            <div className="text-sm text-(--muted-text)">{item.duration}</div>
                        </div>

                        <p className="mt-4 text-md text-(--muted-text)">{item.institute}</p>

                        <div className="mt-4 flex flex-wrap gap-3 items-center">
                            <Badge>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                                </svg>
                                <span className="text-sm">CGPA: {item.cgpa}</span>
                            </Badge>

                            <Badge>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12l2 2 4-4" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm">Percentage: {item.percentage}</span>
                            </Badge>

                            <div className="ml-auto text-sm text-(--muted-text)">
                                <span>{item.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* timeline dot + line (only visible on md+) */}
                <div className={`hidden md:flex flex-col items-center ${timelineOrder} w-20`}>
                    <div className="relative h-full flex flex-col items-center justify-center">
                        <div className="w-1 h-full bg-(--border-color) rounded-md absolute top-0" />
                        <div className="relative z-10 bg-(--button-background) w-12 h-12 rounded-full border border-(--border-color) flex items-center justify-center shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                <path d="M12 8v4l3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="min-h-screen py-12 flex flex-col items-center">
            <div className="w-[90%] md:w-[75%]">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-(--border-color)">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Education details</h2>
                        <p className="text-sm text-(--muted-text)">A concise timeline of academic milestones.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {data.map((item, idx) => (
                        <div key={idx} className="">
                            <EducationCard item={item} align={idx % 2 === 0 ? 'left' : 'end'} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Education
