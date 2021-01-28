import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false

export default function Sidebar() {
  return (
    <div>
      <div className="bg-gray-900 text-white lg:rounded overflow-hidden shadow-md">
        <div className="m-4">
          <div className="w-32 h-32 relative mb-4 mx-auto">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                alt="lovely avatar"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>

          <div className="text-center text-xl font-light">Rafi Priatna K</div>

          <p className="text-sm text-center font-light">
            Selamat datang di Kebun digital saya.
          </p>

          <div className="text-center text-sm mt-2 text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <p className="ml-2 inline-block">Tangerang Selatan, Indonesia</p>
          </div>

          <div className="mt-4 text-center">
            <button className="bg-gray-500 transition duration-400 ease-in-out hover:bg-gray-700 px-2 py-2 rounded w-full">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
