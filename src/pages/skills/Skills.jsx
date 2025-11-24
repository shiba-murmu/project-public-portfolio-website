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
                <div className='pt-10 bg-(--footer-background) py-12 md:py-20 px-13 mt-10 rounded-2xl md:flex  md:space-x-40 justify-center items-center md:items-start'>


                    {
                        data_box.map((item, index) => (
                            <div key={index}>
                                <span className='text-md md:text-lg  font-bold border-b border-(--muted-text) '>{item.title}</span>
                                <ul className='pl-5 p-5 md:text-lg  list-disc text-md font-normal text-(--muted-text)'>
                                    {item.list.map((item, index) => (
                                        <li className='mt-2'  key={index}>{item}</li>
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