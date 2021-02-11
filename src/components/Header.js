import React, { useState } from "react"
import { Link } from "gatsby"

import FotoProfil from "../images/me.jpg"

export default function Header() {
  const [isMobile, setMobile] = useState(false)

  return (
    <div className="container mx-auto lg:max-w-4xl flex flex-col lg:flex-row lg:mb-16 lg:mt-8">
      <div className="flex items-center justify-between px-6 lg:px-2 py-4 lg:py-0">
        <Link to="/" className="uppercase font-semibold text-white">
          <div className="flex justify-between space-x-2 items-center">
            <div>
              <div className="group w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={FotoProfil}
                  alt="8bit me wkwkw"
                  className="object-cover object-center w-full h-full visible group-hover:hidden"
                />
              </div>
            </div>
            <div>
              RAFIPRIATNA.ID
            </div>
          </div>
        </Link>
        <div>
          <button
            onClick={() => setMobile(!isMobile)}
            className="focus:outline-none block lg:hidden text-white"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={!isMobile ? "block" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={isMobile ? "block" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${isMobile ? "block px-2" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0 text-white`}
      >
        {/* <div className="flex flex-col lg:flex-row">
            <a href="#" className="block px-4 py-2 lg:py-4 hover:text-gray-900">
              About Me
            </a>
          </div> */}
        <div></div>
        <div className="flex flex-col lg:flex-row">
          <Link
            to="/"
            className="transition duration-200 ease-in-out px-4 py-2 lg:py-4 text-gray-300 hover:text-white block text-base font-medium"
            activeClassName="text-white underline"
          >
            Beranda
            </Link>
          <Link
            to="/blog"
            className="transition duration-200 ease-in-out px-4 py-2 lg:py-4 text-gray-300 hover:text-white block text-base font-medium"
            activeClassName="text-white underline"
          >
            Blog
            </Link>
          <Link
            to="/tentang"
            className="transition duration-200 ease-in-out px-4 py-2 lg:py-4 text-gray-300 hover:text-white block text-base font-medium"
            activeClassName="text-white underline"
          >
            $whoami
            </Link>
        </div>
      </div>
    </div>
  )
}
