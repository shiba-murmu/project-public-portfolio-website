import React from 'react'
import Text from '../../components/customtext/Text'
import { Link } from 'react-router-dom'

export default function Education_experience() {

    const Education_detail = [
        {
            Institution: 'Generix Info Tech',
            Degree: 'Web development',
            Description: 'Full stack web development course',
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },

        {
            Institution: 'Generix Info Tech',
            Degree: 'Web development',
            Description: 'Full stack web development course',
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },
    ]


    const data = [
        {
            Company: 'Generix Info Tech',
            Role: 'Web development',
            Description: 'Full stack web development course',
            tect_stack: ['html', 'css', 'php'],
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },
        {
            Company: 'Generix Info Tech',
            Role: 'Web development',
            Description: 'Full stack web development course',
            tect_stack: ['html', 'css', 'php'],
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },
        {
            Company: 'Generix Info Tech',
            Role: 'Web development',
            Description: 'Full stack web development course',
            tect_stack: ['html', 'css', 'php'],
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },
        {
            Company: 'Generix Info Tech',
            Role: 'Web development',
            Description: 'Full stack web development course',
            tect_stack: ['html', 'css', 'php'],
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        },
        {
            Company: 'Generix Info Tech',
            Role: 'Web development',
            Description: 'Full stack web development course',
            tect_stack: ['html', 'css', 'php', 'html', 'css', 'php', 'html', 'css', 'php'],
            Time_period: '12/03/2023 to  12/04/2023',
            address: 'TATA'
        }
    ]

    // Small reusable chip
    const Chip = ({ children }) => (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[rgba(255,255,255,0.02)] border border-(--border-color)">{children}</span>
    )

    const Experience_component = () => {
        return (
            <>
                <div className='w-full md:pl-40 flex justify-center items-center md:justify-start'>
                    <Text text={'Education & Experience'} />
                </div>

                {/* Tabs / heading */}
                <div className='w-[90%] md:w-[75%] flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mt-4'>
                    <div className='flex-1'>
                        <h3 className='text-xl md:text-2xl font-bold'>Experience</h3>
                        <p className='text-sm text-(--muted-text) mt-2'>Work history, projects and tech stacks — concise and scannable.</p>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <button className='px-3 py-1 rounded-md bg-(--button-background) text-(--button-text-color)'>Download CV</button>
                        {/* <button onClick={() => document.getElementById('education-scroll')?.scrollIntoView({ behavior: 'smooth' })} className='px-3 py-1 rounded-md border border-(--border-color)'>Education</button> */}
                    </div>
                </div>

                {/* Desktop grid - timeline left, cards right */}
                <div className='hidden md:grid md:grid-cols-4 md:gap-6 w-[90%] md:w-[75%] mt-6'>

                    {/* Timeline column */}
                    <aside className='col-span-1'>
                        <div className='sticky top-24 flex flex-col gap-6'>
                            <div className='text-(--muted-text)'>Timeline</div>
                            {/* simple vertical line with dots */}
                            <div className='relative pl-6'>
                                <div className='absolute left-3 top-0 bottom-0 w-0.5 bg-(--border-color) rounded'></div>
                                {data.map((_, i) => (
                                    <div key={i} className='relative mb-8 ml-0'>
                                        <div className='w-6 h-6 rounded-full bg-(--button-background) border border-(--border-color) flex items-center justify-center text-xs text-(--button-text-color)'>
                                            {i + 1}
                                        </div>
                                        <div className='ml-10 mt-1 text-sm text-(--muted-text)'>
                                            {data[i].Time_period}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Cards grid */}
                    <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {data.map((item, index) => (
                            <article key={index} className='flex flex-col bg-(--footer-background) border border-(--border-color) rounded-2xl p-6 min-h-[220px] hover:shadow-lg transition-shadow'>
                                <header className='flex items-start justify-between gap-4'>
                                    <div>
                                        <h4 className='text-lg font-bold'>{item.Company}</h4>
                                        <div className='text-sm text-(--muted-text) mt-1'>{item.Role}</div>
                                    </div>
                                    <div className='text-sm text-(--muted-text)'>{item.Time_period}</div>
                                </header>

                                <main className='mt-3 flex-1'>
                                    <p className='text-md text-(--muted-text) leading-relaxed'>{item.Description}</p>
                                </main>

                                <footer className='mt-4 flex items-center justify-between gap-4'>
                                    <div className='flex flex-wrap gap-2'>
                                        {item.tect_stack.slice(0, 6).map((t, i) => (
                                            <Chip key={i}>{t}</Chip>
                                        ))}
                                        {item.tect_stack.length > 6 && <span className='text-sm text-(--muted-text)'>+{item.tect_stack.length - 6}</span>}
                                    </div>

                                    {/* <div className='flex gap-2'>
                                        <Link to='/project-details'>
                                            <button className='px-3 py-1 rounded-md bg-(--button-background) text-(--button-text-color)'>Details</button>
                                        </Link>
                                        <button className='px-3 py-1 rounded-md border border-(--border-color) text-sm'>Apply</button>
                                    </div> */}
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Mobile carousel */}
                <div className='md:hidden w-full mt-6'>
                    <div className='no-scrollbar w-full px-1 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide'>
                        {data.map((item, index) => (
                            <div key={index} className='inline-block align-top w-80 h-96 bg-(--footer-background) text-white rounded-xl m-2 p-4 shrink-0'>
                                <div className='flex flex-col h-full'>
                                    <div>
                                        <h3 className='text-lg font-bold border-b border-(--muted-text) pb-2'>{item.Company}</h3>
                                        <p className='text-sm text-(--muted-text) mt-2'>{item.Role}</p>
                                    </div>

                                    <div className='mt-3 flex-1 overflow-auto pr-2'>
                                        <p className='text-sm text-(--muted-text) wrap-break-word'>{item.Description}</p>
                                    </div>

                                    <div className='mt-auto text-sm'>
                                        <div className='flex flex-wrap gap-2 mt-2'>
                                            {item.tect_stack.slice(0, 6).map((t, i) => (
                                                <span key={i} className='px-2 py-1 rounded-md text-xs bg-[rgba(255,255,255,0.02)] border border-(--border-color)'>{t}</span>
                                            ))}
                                        </div>

                                        <div className='mt-3 text-(--muted-text)'>
                                            <p>Time: <span className='font-light'>{item.Time_period}</span></p>
                                            <p>Address: <span className='font-light'>{item.address}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education section anchor */}
                {/* <div id='education-scroll' className='w-full mt-10'>
                    <div className='w-[90%] md:w-[75%]'>
                        <h3 className='text-xl font-bold'>Education</h3>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {Education_detail.map((ed, i) => (
                                <div key={i} className='bg-(--footer-background) border border-(--border-color) rounded-2xl p-6'>
                                    <h4 className='text-lg font-semibold'>{ed.Institution}</h4>
                                    <div className='text-sm text-(--muted-text) mt-1'>{ed.Degree} • {ed.Time_period}</div>
                                    <p className='mt-3 text-(--muted-text)'>{ed.Description}</p>
                                    <div className='mt-4'>
                                        <span className='text-sm text-(--muted-text)'>Address: </span>
                                        <span className='font-light'>{ed.address}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </>
        )
    }


    return (
        <div id='experience' className='pt-10 md:pt-12 flex flex-col justify-start items-center gap-5'>
            <Experience_component />
        </div>
    )
}
