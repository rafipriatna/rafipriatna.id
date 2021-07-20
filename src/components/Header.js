import React from "react"
import { Link } from "gatsby"

import FotoProfil from "../images/me.jpg"

export default function Header() {
  return (
    <div className="container mx-auto lg:max-w-4xl flex flex-col lg:flex-row lg:mb-16 lg:mt-8">
      <div className="flex items-center justify-between px-6 lg:px-2 py-4 lg:py-0 uppercase font-semibold text-gray-100">
        <Link to="/">
          <div className="flex justify-between space-x-2 items-center">
            <div>
              <div className="group w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={FotoProfil}
                  alt="8bit me wkwkw"
                  className="object-cover object-center w-full h-full group-hover:hidden"
                />
              </div>
            </div>
            <div className="lg:block hidden">RAFIPRIATNA.ID</div>
          </div>
        </Link>
        <div className="lg:hidden block">RAFIPRIATNA.ID</div>
      </div>

      <div className="hidden lg:block px-2 lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0 text-gray-100">
        {/* <div className="flex flex-col lg:flex-row">
            <a href="#" className="block px-4 py-2 lg:py-4 hover:text-gray-900">
              About Me
            </a>
          </div> */}
        <div></div>
        <div className="flex flex-col lg:flex-row">
          <Link
            to="/"
            className="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100 rounded-md px-4 py-2 lg:py-4 text-gray-300 hover:text-gray-100 block text-base font-medium m-1"
            activeClassName="text-gray-100 bg-gray-800 rounded-md"
          >
            Beranda
          </Link>
          <Link
            to="/blog"
            className="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100 rounded-md px-4 py-2 lg:py-4 text-gray-300 hover:text-gray-100 block text-base font-medium m-1"
            activeClassName="text-gray-100 bg-gray-800 rounded-md"
          >
            Blog
          </Link>
          <Link
            to="/tentang"
            className="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100 rounded-md px-4 py-2 lg:py-4 text-gray-300 hover:text-gray-100 block text-base font-medium m-1"
            activeClassName="text-gray-100 bg-gray-800 rounded-md"
          >
            Tentang
          </Link>
          <Link
            to="/portofolio"
            className="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100 rounded-md px-4 py-2 lg:py-4 text-gray-300 hover:text-gray-100 block text-base font-medium m-1"
            activeClassName="text-gray-100 bg-gray-800 rounded-md"
          >
            Portofolio
          </Link>
        </div>
      </div>
    </div>
  )
}
