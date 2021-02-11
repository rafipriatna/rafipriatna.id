import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <footer className="footer relative my-10">
      <div className="text-sm text-white font-bold">
        <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 lg:mt-4 mt-2">
          <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0">
            <div className="flex flex-col lg:flex-row">
              © 2021 Rafi Priatna K.
            </div>
            <div className="text-md flex flex-col lg:flex-row lg:block hidden">
              Dibuat dengan <FontAwesomeIcon icon={faHeart} size="1x" className="animate-bounce text-red-800" /> di Tangerang Selatan.

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
