import React from 'react'
import { Link } from 'react-router-dom'
function Admin_add() {
    return (
        <>
            <div className='min-h-screen flex justify-center items-start'>
                <div className='w-full grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2'>
                    <section className='md:p-5 md:pl-5 w-full text-center'>
                        <span className='text-2xl md:text-4xl'>Add admin</span>
                    </section>
                    <section className='flex w-full  h-full flex-row justify-center items-center md:justify-center text-sm md:text-md gap-4'>
                        <Link to={'/admin-dashboard'}>

                            <button
                                className='bg-(--button-background) inline-flex items-center gap-2  text-(--button-text-color) rounded-full  py-2 px-4  cursor-pointer'
                            >
                                back admin dashboard
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" className='h-6 w-6' viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Admin_add