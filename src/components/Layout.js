import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function layout({ children, circle }) {
  return (
    <div className={`bg-white dark:bg-dark min-h-screen ${circle && 'overflow-hidden'}`}>
      <main
        className="flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark relative"
      >
        <Header />
        {circle && (
          <div className="absolute top-0 left-0 right-0">
            <div className="absolute top-0 overflow-visible opacity-50 dark:opacity-20 left-16">
              <div className="mix-blend-multiply absolute w-[600px] h-[800px] rounded-[40rem] circle-obj"></div>
            </div>

            <div className="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
              <div className="mix-blend-multiply absolute w-[500px] h-[700px] rounded-[40rem] circle-obj2"></div>
            </div>
          </div>
        )}
        <div className="z-10 container mt-8 mb-8 dark:text-gray-100">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  )
}
