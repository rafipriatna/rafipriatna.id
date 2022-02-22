import React from 'react'
import { Link } from 'gatsby'

import FotoProfil from '../images/me.jpg'

export default function Hero() {
    return (
        <div className='grid items-center grid-cols-1 text-center place-items-center md:text-left md:grid-cols-6 my-10'>

            <div className='order-2 col-span-5'>
                <h1 className='mb-8 text-5xl leading-tight md:leading-normal md:order-1'>
                    Halo, saya{' '}
                    <span className='animate-pulse text-indigo-500'>Rafi</span>.
                    Selamat datang di kebun digital saya {' '} <span role='img' aria-label='tanaman'>🌱</span>.
                </h1>
                <Link to='/blog' className='bg-indigo-500 text-white text-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-indigo-600 mr-6 shadow-lg shadow-indigo-500/50 dark:shadow-indigo-800/50 rounded-lg'>
                    📝 Lihat Blog
                </Link>
            </div>

            <div className='order-1 md:order-2'>
                <img
                    src={FotoProfil}
                    alt='8bit me wkwkw'
                    className='h-30 w-30 rounded-full'
                />
            </div>

        </div>
    )
}