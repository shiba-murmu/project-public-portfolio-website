import React from 'react'
import { Link } from 'react-router-dom'
function Project_card_desktop({ orderOne, orderTwo , path }) {
    return (
        <>
            <div className='grid grid-cols-2 w-full gap-50  h-96'>
                <div style={{order : orderOne}} className='flex order-${orderOne}  justify-center items-center'>
                    <img src={path}
                        className=' object-contain h-full w-full'
                        alt="" />
                </div>
                <div style={{order : orderTwo}} className='flex order-${orderTwo} justify-center items-start flex-col'>
                    <div className='border-b-2  shadow-md mb-3  border-(--bluish) py-2 px-20'>
                        <span className='text-3xl font-bold text-(--bluish)'>Hotel management</span>
                    </div>
                    <div>
                        <span className='font-extrabold text-xl'>Tech used : </span>
                        <ul className='flex text-lg font-semibold pl-5 gap-1 text-(--muted-text)'>
                            <li>Html,</li>
                            <li>CSS,</li>
                            <li>Javascript,</li>
                        </ul>
                    </div>
                    <div>
                        <span className='font-extrabold text-xl'>Description : </span>
                        <p className=' text-lg pl-5 text-(--muted-text)'>Project description goes here</p>
                    </div>
                    <div className='flex w-full justify-start items-start space-x-4 mt-auto pt-3 pb-3 rounded-md'>
                        <Link to='/project-details'>
                            <button className='cursor-pointer bg-(--button-background) w-30   px-4 py-2 rounded-md'>Details</button>
                        </Link>
                        <button className= ' bg-(--button-background) cursor-pointer  px-4 py-2 w-30 rounded-md'>Code</button>
                        <button className='cursor-pointer w-30 bg-(--button-background) px-4 py-2 rounded-md'>Live</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_card_desktop