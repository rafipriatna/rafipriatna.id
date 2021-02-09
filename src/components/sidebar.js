import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt, faHeart } from "@fortawesome/free-solid-svg-icons"

import FotoProfil from "../images/me.jpg"

config.autoAddCss = false

export default function Sidebar() {
  return (
    <div>
      <div className="sticky top-20">
        <div className="bg-gray-900 text-white lg:rounded overflow-hidden shadow-md">
          <div className="m-4">
            <div className="w-32 h-32 relative mb-4 mx-auto">
              <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <img
                  src={FotoProfil}
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
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="animate-pulse" />
              <p className="ml-2 inline-block">Tangerang Selatan, Indonesia</p>
            </div>
            
          </div>
        </div>

        <div className="text-center text-gray-400 mt-4 text-sm">
          Dibuat dengan <FontAwesomeIcon icon={faHeart} size="1x" className="animate-bounce text-red-800" /> saat #DiRumahAja.
        </div>
      </div>
    </div>
  )
}
