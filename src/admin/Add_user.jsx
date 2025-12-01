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

    const Component2 = () => {
        // Form for add the user to the website.
        return (
            <>
                <div className='w-full flex flex-col justify-center items-center mt-10 gap-6'>
                    <form className='w-full max-w-md flex flex-col gap-4'>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)'
                        />
                        <input
                            type="email"
                            placeholder="Enter email"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)'
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)'
                        />
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)'
                        />
                        <button
                            type="submit"
                            className='bg-(--button-background) cursor-pointer text-(--button-text-color) rounded-lg px-4 py-2'
                        >
                            Add User
                        </button>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='min-h-screen flex flex-col justify-start items-center px-10 md:px-0'>
                <Component1 />
                <Component2 />
            </div>
        </>
    )
}

export default Add_user