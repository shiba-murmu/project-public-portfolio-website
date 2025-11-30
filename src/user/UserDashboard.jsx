import React, { useState } from 'react'

function UserDashboard() {


    const email = "https://public-portfolio-steel.vercel.app/shiba-murmu";

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-start'>
                <div className='mt-10 w-full text-center'>
                    <h1 className='text-2xl md:text-3xl font-bold '>Shiba Murmu</h1>
                </div>
                <div className='w-full flex flex-col items-center justify-center mt-2'>
                    <span>
                        Your portfolio link is given below:
                    </span>
                    <div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-(--exception-button-border) bg-(--exception-button-background) hover:bg-(--bg-color)  "
                        aria-label={`Copy email ${email}`}
                        title="Copy email"
                    >
                        {/* <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
                            <path d="M3 7a2 2 0 012-2h8a2 2 0 012 2v2h-2V7H5v10h6v2H5a2 2 0 01-2-2V7z" fill="currentColor" />
                            <path d="M21 11v8a2 2 0 01-2 2H9a2 2 0 01-2-2V11a2 2 0 012-2h10a2 2 0 012 2z" fill="currentColor" />
                        </svg> */}
                        <span className="text-[10px] md:text-sm font-thin">{email}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard