import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    const [name, setName] = useState('No name')
    const [lastName, setLastName] = useState(null)
    const [profession, setProfession] = useState('No profession')

    useEffect(() => {
        setName('Bhawna')
        setLastName('Chaudhary')
        setProfession('Web Developer')
    }, [])

    function scrollToSection(id) {
        const el = document.getElementById(id)
        const header = document.getElementById('site-header')
        if (!el) return
        const headerHeight = header ? header.offsetHeight : 0
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12
        window.scrollTo({ top, behavior: 'smooth' })
    }

    return (
        <section id="home" className="min-h-screen flex items-center py-8 md:py-16">
            <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* LEFT: Portrait + quick actions (mobile-first) */}
                <aside className="flex flex-col items-center md:items-start gap-6 order-1 md:order-1">
                    <div className="relative rounded-md overflow-hidden w-40 h-40 md:w-72 md:h-72 border border-(--border-color) shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1583391265517-35bbdad01209?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0"
                            alt={`${name} ${lastName}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute left-2 bottom-2  bg-(--button-background)   text-(--button-text-color) text-xs px-3 py-1 rounded-full shadow">Available</div>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-extrabold">{name} <span className="block md:inline">{lastName}</span></h1>
                        <p className="text-(--muted-text) mt-1">{profession}</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => scrollToSection('project')}
                            className="px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-semibold shadow-sm hover:shadow-md focus:outline-none"
                        >
                            View work
                        </button>

                        <button
                            onClick={() => scrollToSection('footer')}
                            className="px-4 py-2 rounded-md border border-(--exception-button-border) bg-(--exception-button-background) text-(--exception-button-text) hover:bg-(--bg-color) focus:outline-none"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile-only quick skills */}
                    <div className="flex flex-wrap gap-2 mt-2 md:hidden">
                        {['React', 'Tailwind', 'JS'].map((s) => (
                            <span key={s} className="px-3 py-1 rounded-full text-xs bg-[rgba(255,255,255,0.02)] border border-(--border-color)">{s}</span>
                        ))}
                    </div>
                </aside>

                {/* RIGHT: Intro, bio, CTA, skills */}
                <main className="order-2 md:order-2">
                    <div className="max-w-xl">
                        <p className="text-lg md:text-2xl leading-relaxed text-center md:text-left text-(--muted-text)">
                            I build <span className="font-extrabold text-(--text-color)">clean, fast</span> and accessible web experiences with React and Tailwind. I focus on shipping product-quality UI — fast iteration, thoughtful UX, and readable code.
                        </p>

                        <p className="mt-4 text-(--muted-text) text-center md:text-left">
                            Currently open to freelance and full-time opportunities. If you have a product idea or a tricky UI problem, let’s chat.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-(--button-background) text-(--button-text-color) font-medium">
                                Resume
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3v4h-4V3H6v18h12V3h-4zM9 7h6v2H9V7zm-2 8h10v2H7v-2z" /></svg>
                            </a>

                            <button
                                onClick={() => scrollToSection('project')}
                                className="px-4 py-2 rounded-md border border-(--border-color) bg-(--footer-background) text-(--text-color) font-medium"
                            >
                                See projects
                            </button>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            {['Python', 'JavaScript', 'React', 'Tailwind'].map((k) => (
                                <div key={k} className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-(--border-color)">
                                    <div className="w-8 h-8 rounded-md flex items-center justify-center bg-[rgba(255,255,255,0.03)]">{k.charAt(0)}</div>
                                    <div>
                                        <div className="text-sm font-semibold">{k}</div>
                                        <div className="text-xs text-(--muted-text)">practical</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* social row */}
                        <div className="mt-6 flex gap-4 justify-center md:justify-start">
                            <a href="" className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] border border-(--border-color)">
                                {/* Facebook */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5' fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                            </a>
                            <a href=""
                                className='p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] border border-(--border-color)'
                            >
                                {/* Linked in */}

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5' fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                            </a>
                            <a href=""
                                className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.02)] border border-(--border-color)"
                            >
                                {/* Gitgub */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5' fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>

                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}
