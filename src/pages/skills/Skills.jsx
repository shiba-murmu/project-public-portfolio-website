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
            <div id='skills' className='min-h-screen flex justify-start flex-col items-center pt-10 font-bold  '>
                <div className='flex justify-center items-center md:justify-start md:pl-47 w-full'>
                    {/* <Heading_text text='Technical skills' /> */}
                    <Text text={'Technical skills'} />
                </div>
                <div className='md:w-[90%] mt-10 grid grid-rows-1 gap-4 rounded-2xl md:grid md:grid-cols-4 md:gap-5  justify-center items-center md:items-start'>
                    {
                        data_box.map((item, index) => (
                            <div className='flex flex-col h-full  md:h-full border my-5 min-h-60 border-(--border-color)  rounded-3xl p-9
                            md:p-8 items-center md:items-start' key={index}>
                                <span className='text-md md:text-lg  font-bold  border-(--muted-text) '>{item.title}</span>
                                <ul className='pl-5 p-5 md:text-lg  md:not-checked:list-disc text-md font-normal text-(--muted-text)'>
                                    {item.list.map((item, index) => (
                                        <li className='mt-2 text-center md:text-left'  key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Skills