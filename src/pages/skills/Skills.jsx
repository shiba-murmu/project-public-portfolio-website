import React from 'react'
import Text from '../../components/customtext/Text'
function Skills() {

    const data_box = [
        {
            title: 'Programming Languages',
            list: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Dart']
        },
        {
            title: 'Framework & Libraries',
            list: ['Django', 'React', 'Tailwind CSS', 'Bootstrap', "React", 'Node.js']
        },
        {
            title: 'Database',
            list: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
        },
        {
            title: 'Others',
            list: ['Git', 'GitHub', 'VS Code', 'Ms office', 'Postman', 'Figma', 'Adobe Photoshop']
        }
    ]
    return (
        <>
            <div id='skills' className='min-h-screen md:mb-10 flex justify-start flex-col items-center pt-10 font-bold  '>
                <div className='flex justify-center items-center md:justify-start md:pl-47 w-full'>
                    {/* <Heading_text text='Technical skills' /> */}
                    <Text text={'Technical skills'} />
                </div>
                <div className="md:w-[90%] mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-5 rounded-2xl justify-items-stretch items-stretch md:justify-center-safe p-3">
                    {data_box.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col p-8 border my-0 border-(--border-color) rounded-xl h-full w-full"
                        >
                            <span className="text-md md:text-lg font-bold">{item.title}</span>

                            {/* make the list take remaining space so content alignment is consistent */}
                            <ul className="mt-4 grow pl-5 p-0 md:text-lg list-disc text-md font-normal text-(--muted-text)">
                                {item.list.map((li, liIdx) => (
                                    <li className="mt-2  md:text-left" key={liIdx}>
                                        {li}
                                    </li>
                                ))}
                            </ul>

                            {/* optional footer pinned to bottom */}
                            {/* <div className="mt-auto">Action / footer</div> */}
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Skills