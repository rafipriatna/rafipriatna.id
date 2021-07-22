import React from "react"
import { Link } from "gatsby"

import FotoProfil from "../images/me.jpg"

export default function Header() {
  const sunIcon = "☀️"
  const moonIcon = "🌙"

  function changeTheme(event) {
    const theme = typeof window !== "undefined" && localStorage.getItem("theme")

    if (theme === "psikopat") {
      typeof window !== "undefined" && localStorage.removeItem("theme")
      event.target.textContent = sunIcon
      document.documentElement.classList.add("dark")
    } else {
      event.target.textContent = moonIcon
      typeof window !== "undefined" && localStorage.setItem("theme", "psikopat")
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="container mx-auto lg:max-w-4xl flex flex-col lg:flex-row lg:mb-16 lg:mt-8">
      <div className="flex items-center justify-between px-6 lg:px-2 py-4 lg:py-0 uppercase font-semibold dark:text-gray-100">
        <Link to="/">
          <div className="flex justify-between space-x-2 items-center">
            <div>
              <div className="group w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={FotoProfil}
                  alt="8bit me wkwkw"
                  className="object-center w-full h-full"
                />
              </div>
            </div>
            <div>RAFIPRIATNA.ID</div>
          </div>
        </Link>
        <div className="lg:hidden block">
          <button
            type="button"
            className="focus:outline-none"
            onClick={changeTheme}
          >
            {localStorage.getItem("theme") === "psikopat" ? moonIcon : sunIcon}
          </button>
        </div>
      </div>

      <div className="hidden lg:block px-2 lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0 dark:text-gray-100">
        <div className="flex flex-col lg:flex-row">
          <Link
            to="/"
            className="transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md px-4 lg:py-4 block text-base font-medium m-1"
            activeClassName="bg-gray-300 dark:bg-gray-800 rounded-md"
          >
            Beranda
          </Link>
          <Link
            to="/blog"
            className="transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md px-4 lg:py-4 block text-base font-medium m-1"
            activeClassName="bg-gray-300 dark:bg-gray-800 rounded-md"
          >
            Blog
          </Link>
          <Link
            to="/tentang"
            className="transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md px-4 lg:py-4 block text-base font-medium m-1"
            activeClassName="bg-gray-300 dark:bg-gray-800 rounded-md"
          >
            Tentang
          </Link>
          <Link
            to="/portofolio"
            className="transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md px-4 lg:py-4 block text-base font-medium m-1"
            activeClassName="bg-gray-300 dark:bg-gray-800 rounded-md"
          >
            Portofolio
          </Link>
          <button
            type="button"
            className="pl-4 py-4 focus:outline-none"
            onClick={changeTheme}
          >
            {localStorage.getItem("theme") === "psikopat" ? moonIcon : sunIcon}
          </button>
        </div>
      </div>
    </div>
  )
}
