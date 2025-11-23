import React from 'react'
import Text from '../../components/customtext/Text'
function Education_experience() {

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

    const handleScroll = () => {
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Experience_component = () => {
        return (
            <>
                <div>
                    <Text text={'Education & Experience'} />
                </div>
                <div className='flex justify-left  w-[85%] border-b-2 border-(--muted-text) pb-2'>
                    <span className='text-xl md:text-2xl font-bold'>Experience</span>
                </div>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='bg-(--footer-background) w-75 min-h-50 md:min-w-72 md:min-h-52 flex justify-start flex-col items-start gap-4 py-7 px-4 rounded-2xl'>
                                    <h1 className='text-center text-lg font-bold border-b border-(--muted-text)'>{item.Company}</h1>
                                    <h3 className='text-md font-bold'>{item.Role}</h3>
                                    <p className='text-md font-light text-(--muted-text)'>{item.Description}</p>

                                    <p className='text-md '>
                                        Time : <span className='text-md font-light text-(--muted-text)'>{item.Time_period}</span>
                                    </p>
                                    <p>
                                        Address : <span className='text-md font-light text-(--muted-text)'>{item.address}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Mobile screen view  */}
                <div className="md:hidden no-scrollbar w-full px-1 overflow-x-auto overflow-y-hidden whitespace-nowrap  scrollbar-hide">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="inline-block align-top w-80 h-96 bg-(--footer-background) text-white rounded-xl m-2 p-6 shrink-0 whitespace-normal"
                        >
                            {/* make card a column so we can control spacing */}
                            <div className="flex flex-col h-full">
                                <div>
                                    <h1 className="text-center text-lg font-bold border-b border-(--muted-text) pb-2">{item.Company}</h1>
                                    <h3 className="text-md font-bold mt-2">{item.Role}</h3>
                                </div>

                                {/* description area: allow it to grow and scroll if long */}
                                <div className="mt-2 myScroller  overflow-y-auto max-h-40 wrap-break-word pr-2">
                                    <p className="text-md font-light text-(--muted-text) wrap-break-word break-all">
                                        {item.Description}
                                    </p>
                                </div>

                                {/* footer info pinned to bottom */}
                                <div className="mt-auto pt-3 text-sm">
                                    <p>Tech:
                                        <span>
                                            {item.tect_stack.map((t, i) => (
                                                <span key={i} className="text-md font-light text-(--muted-text)">{t}{i !== item.tect_stack.length - 1 ? ', ' : ''}</span>
                                            ))}
                                        </span>
                                    </p>

                                    <p className="text-md">Time : <span className="text-md font-light text-(--muted-text)">{item.Time_period}</span></p>
                                    <p>Address : <span className="text-md font-light text-(--muted-text)">{item.address}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }




    return (
        // Main function codes here.
        <>
            <div id='experience' className='min-h-screen  pt-10 md:pt-0 flex flex-col justify-start items-center gap-5'>
                <Experience_component />
            </div>
        </>
    )
}

export default Education_experience