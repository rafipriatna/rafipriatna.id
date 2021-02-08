import React, { useState } from "react"
import { Link } from "gatsby"

export default function Header() {
  const [isMobile, setMobile] = useState(false)

  return (
    <div className="bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto px-0 lg:px-20 flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 lg:px-2 py-4 lg:py-0">
          <Link to="/" className="uppercase font-semibold text-white">
            RAFIPRIATNA.ID
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
          className={`${
            isMobile ? "block" : "hidden"
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
              className="transition duration-200 ease-in-out px-4 py-2 lg:py-4 text-gray-300 hover:bg-gray-600 hover:text-white block text-base font-medium"
              activeClassName="bg-gray-600 text-white"
            >
              Beranda
            </Link>
            <Link
              to="/tentang"
              className="transition duration-200 ease-in-out px-4 py-2 lg:py-4 text-gray-300 hover:bg-gray-600 hover:text-white block text-base font-medium"
            >
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
