import React from 'react'
import Text from '../../components/customtext/Text'
function Skills() {

    const data_box = [
        {
            title: 'Programming Languages',
            list: ['Python', 'Java', 'JavaScript']
        },
        {
            title: 'Framework & Libraries',
            list: ['Django', 'React', 'Tailwind CSS', 'Bootstrap', "React", 'Node.js']
        },
        {
            title: 'Database',
            list: ['MySQL', 'MongoDB']
        },
        {
            title: 'Others',
            list: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Adobe Photoshop']
        }
    ]
    return (
        <>
            <div id='skills' className='min-h-screen flex justify-start flex-col items-center pt-10 font-bold  '>
                <div className='flex justify-center items-center'>
                    {/* <Heading_text text='Technical skills' /> */}
                    <Text text={'Technical skills'} />
                </div>
                <div className='pt-10 bg-(--footer-background) py-12 md:py-20 px-13 mt-10 rounded-2xl md:flex  md:space-x-40 justify-center items-center md:items-start'>


                    {
                        data_box.map((item, index) => (
                            <div key={index}>
                                <span className='text-md font-bold border-b-2 '>{item.title}</span>
                                <ul className='pl-5 p-5 list-disc text-md font-normal text-(--muted-text)'>
                                    {item.list.map((item, index) => (
                                        <li key={index}>{item}</li>
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