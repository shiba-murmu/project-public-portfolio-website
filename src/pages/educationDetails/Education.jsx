import React from 'react'

function Education() {
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
        },
       
    ]
    const EducationCard = ({ degree, branch, institute, location, duration, cgpa, percentage , index }) => {
        return (
            <>

                <div className={`flex justify-${index % 2 === 0 ? 'start' : 'end'} w-[90%] md:mb-20  md:w-[75%]`}>
                    <div className='flex border w-full  md:w-1/2 rounded-2xl p-7 md:p-20 border-(--border-color) bg-(--footer-background) flex-col px-4  gap-2 flex-wrap'>
                        <span className='text-lg font-bold border-b border-(--exception-button-border)'>{degree}</span>
                        <span className='text-md font-light text-(--muted-text)'>Branch : <span className='text-(--text-color)'>
                            {branch}
                        </span></span>
                        <span className='text-md font-light text-(--muted-text) flex-wrap'>{institute}</span>
                        <span className='text-md font-light text-(--muted-text)'>
                            {location}
                        </span>
                        <span className='text-md font-light text-(--muted-text)'>Duration : <span className='text-(--text-color)'>
                            {duration}
                        </span></span>
                        <span className='text-md font-light text-(--muted-text)'>CGPA : <span className='text-(--text-color)'>{cgpa}</span></span>
                        <span className='text-md font-light text-(--muted-text)'>Percentage : <span className='text-(--text-color)'>{percentage}</span></span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='min-h-screen mb-10 md:my-20  pt-10 md:pt-0 flex flex-col justify-start items-center gap-3'>
                <div className='flex justify-left w-[90%]  md:w-[75%] border-b-2 border-(--muted-text) pb-2'>
                    <span className='text-xl md:text-2xl font-bold'>Education details</span>
                </div>
                <div></div>
                <EducationCard
                    degree={data[0].degree}
                    branch={data[0].branch}
                    institute={data[0].institute}
                    location={data[0].location}
                    duration={data[0].duration}
                    cgpa={data[0].cgpa}
                    percentage={data[0].percentage} 
                    index={0}/>
                <EducationCard
                    degree={data[1].degree}
                    branch={data[1].branch}
                    institute={data[1].institute}
                    location={data[1].location}
                    duration={data[1].duration}
                    cgpa={data[1].cgpa}
                    percentage={data[1].percentage}
                    index={1} />
                <EducationCard
                    degree={data[2].degree}
                    branch={data[2].branch}
                    institute={data[2].institute}
                    location={data[2].location}
                    duration={data[2].duration}
                    cgpa={data[2].cgpa}
                    percentage={data[2].percentage} 
                    index={2}/>
            </div>
        </>
    )
}

export default Education