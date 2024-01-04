import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <div className="my-10 lg:mt-20 mb-10 bg-indigo-500 rounded-lg p-5 text-white dark:bg-indigo-800">
            <div className="flex flex-row items-center">
                <div className="w-full lg:w-4/6">
                    <h1 className="text-4xl font-semibold leading-tight md:leading-normal">
                        Hei, saya Rafi!
                    </h1>
                    <p className="text-xl leading-relaxed md:order-1 my-4">
                        Selamat datang di kebun digital saya.{" "}
                        <span role="img" aria-label="tanaman">
                            🌱
                        </span>
                        <span className="block mt-2">
                            Saya seorang Offensive Cyber Security Engineer. Saya
                            menulis artikel di sini selain untuk
                            bersenang-senang, juga untuk catatan belajar saya.
                        </span>
                    </p>
                </div>
                <div className="w-48 h-48 relative hidden lg:block ml-auto hero">
                    <StaticImage
                        src='../images/me_transparent_big.png'
                        alt='8bit me wkwkw'
                    />
                </div>
            </div>
        </div>
    )
}