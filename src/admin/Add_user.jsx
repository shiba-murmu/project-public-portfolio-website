import React from 'react'
import { Link } from 'react-router-dom'
function Add_user() {
    const Component1 = () => {
        return (
            <>

                <div className='w-full grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2'>
                    <section className='md:p-5 md:pl-5 w-full text-center'>
                        <span className='text-2xl md:text-4xl'>Add user</span>
                    </section>
                    <section className='flex w-full  h-full flex-row justify-center items-center md:justify-center text-sm md:text-md gap-4'>
                        <Link to={'/admin-dashboard'}>

                            <button
                                className='bg-(--button-background) inline-flex items-center gap-2  text-(--button-text-color) rounded-full  py-2 px-4  cursor-pointer'
                            >
                                back admin dashboard
                            </button>
                        </Link>
                    </section>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='min-h-screen flex justify-center items-start'>
                <Component1 />
            </div>
        </>
    )
}

export default Add_user