import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
    const sunIcon = '☀️'
    const moonIcon = '🌙'

    function changeTheme(event) {
        const theme = typeof window !== 'undefined' && localStorage.getItem('theme')

        if (theme === 'psikopat') {
            typeof window !== 'undefined' && localStorage.removeItem('theme')
            event.target.textContent = sunIcon
            document.documentElement.classList.add('dark')
        } else {
            event.target.textContent = moonIcon
            typeof window !== 'undefined' && localStorage.setItem('theme', 'psikopat')
            document.documentElement.classList.remove('dark')
        }
    }

    const menus = [
        {
            name: 'Beranda',
            href: '/',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Proyek',
            href: '/proyek',
        },
        {
            name: 'Cheatsheets',
            href: '/cheatsheets'
        }
    ]

    return (
        <div className='transition lg:text-lg z-10 lg:mt-10 mx-auto lg:max-w-3xl px-4 lg:px-0 '>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex items-center justify-between px-0 py-4 lg:py-0 uppercase font-semibold dark:text-gray-100'>
                    <Link to='/'>
                        <div className='flex justify-between space-x-2 items-center'>
                            <div>
                                <div className='group w-8 h-8 rounded-full overflow-hidden bg-indigo-500 dark:bg-indigo-800'>
                                    <StaticImage
                                        src='../images/me_transparent_big.png'
                                        alt='8bit me wkwkw'
                                        className='object-center w-full h-full p-0.5'
                                    />
                                </div>
                            </div>
                            <div>RAFIPRIATNA.ID</div>
                        </div>
                    </Link>
                    <div className='lg:hidden block'>
                        <button
                            type='button'
                            className='focus:outline-none'
                            onClick={changeTheme}
                        >
                            {typeof window !== 'undefined' &&
                                localStorage.getItem('theme') === 'psikopat'
                                ? moonIcon
                                : sunIcon}
                        </button>
                    </div>
                </div>

                <div className='hidden lg:block px-2 flex flex-row w-full dark:text-gray-100'>
                    <div className='flex justify-end items-center'>
                        {menus.map((item, index) => {
                            return (
                                <Link
                                    to={item.href}
                                    className='transition duration-200 ease-in-out px-4 dark:text-white hover:text-white lg:py-2 block font-medium m-1 hover:bg-indigo-500 hover:dark:bg-indigo-800 rounded-md'
                                    activeClassName='text-white bg-indigo-500 dark:bg-indigo-800'
                                    key={index}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <button
                            type='button'
                            className='pl-4 py-4 focus:outline-none'
                            onClick={changeTheme}
                        >
                            {typeof window !== 'undefined' &&
                                localStorage.getItem('theme') === 'psikopat'
                                ? moonIcon
                                : sunIcon}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}