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
    <div className="transition sticky top-0 z-50 lg:text-xl bg-gray-100 dark:bg-gray-800 shadow-xl">
      <div className="mx-auto lg:max-w-4xl flex flex-col lg:flex-row">
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
              {typeof window !== "undefined" &&
              localStorage.getItem("theme") === "psikopat"
                ? moonIcon
                : sunIcon}
            </button>
          </div>
        </div>

        <div className="hidden lg:block px-2 flex flex-row w-full dark:text-gray-100">
          <div className="flex justify-end items-center">
            <Link
              to="/"
              className="border-b-2 border-transparent transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 px-4 block font-medium py-5 hover:border-blue-600"
              activeClassName="bg-gray-300 dark:bg-gray-700 border-blue-600"
            >
              Beranda
            </Link>
            <Link
              to="/blog"
              partiallyActive={true}
              className="border-b-2 border-transparent transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 px-4 block font-medium py-5 hover:border-blue-600"
              activeClassName="bg-gray-300 dark:bg-gray-700 border-blue-600"
            >
              Blog
            </Link>
            <Link
              to="/tentang"
              className="border-b-2 border-transparent transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 px-4 block font-medium py-5 hover:border-blue-600"
              activeClassName="bg-gray-300 dark:bg-gray-700 border-blue-600"
            >
              Tentang
            </Link>
            <Link
              to="/portofolio"
              className="border-b-2 border-transparent transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700 px-4 block font-medium py-5 hover:border-blue-600"
              activeClassName="bg-gray-300 dark:bg-gray-700 border-blue-600"
            >
              Portofolio
            </Link>
            <button
              type="button"
              className="pl-4 py-4 focus:outline-none"
              onClick={changeTheme}
            >
              {typeof window !== "undefined" &&
              localStorage.getItem("theme") === "psikopat"
                ? moonIcon
                : sunIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
