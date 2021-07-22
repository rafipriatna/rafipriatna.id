import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container mt-8 mx-auto mb-8 px-4 lg:px-0 lg:max-w-4xl dark:text-gray-100">
        {children}
        <Footer />
      </div>
    </div>
  )
}
