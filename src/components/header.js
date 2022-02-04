import React from 'react'
import { Link } from 'gatsby'

import FotoProfil from '../images/me.jpg'

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
            name: 'Tentang',
            href: '/tentang',
        },
        {
            name: 'Proyek',
            href: '/proyek',
        },

    ]

    return (
        <div className='transition lg:text-xl z-10 lg:mt-5'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex items-center justify-between px-0 py-4 lg:py-0 uppercase font-semibold dark:text-gray-100'>
                    <Link to='/'>
                        <div className='flex justify-between space-x-2 items-center'>
                            <div>
                                <div className='group w-8 h-8 rounded-full overflow-hidden'>
                                    <img
                                        src={FotoProfil}
                                        alt='8bit me wkwkw'
                                        className='object-center w-full h-full'
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
                                    className='transition duration-200 ease-in-out hover:text-indigo-500 px-4 lg:py-2 block font-medium m-1'
                                    activeClassName='text-indigo-600'
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