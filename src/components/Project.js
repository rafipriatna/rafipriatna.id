import React from "react"
import { Link } from "gatsby"

export default function Project({ projects }) {
  return (
    <div className="flex flex-wrap">
      {projects.map(project => {
        const { frontmatter, fields, id } = project
        const { title, description, type, cover, icon } = frontmatter
        const coverImage = cover.childImageSharp.fluid.src
        const iconImage = icon.childImageSharp.fluid.src
        let bgColor = ""

        if (type === "Website") {
          bgColor = "bg-blue-500"
        } else if (type === "Mobile") {
          bgColor = "bg-red-500"
        } else if (type === "Desktop") {
          bgColor = "bg-yellow-500"
        } else {
          bgColor = "bg-gray-500"
        }

        return (
          <div className="md:w-1/2 lg:w-1/3 py-2 px-2">
            <Link to={"/portofolio/" + fields.slug} key={id}>
              <div className="relative p-2 rounded-lg transition duration-500 ease-in-out transform hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800">
                <div
                  className={
                    "right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-gray-100 px-2 py-1 " +
                    bgColor
                  }
                >
                  {type}
                </div>
                <img
                  src={coverImage}
                  className="h-32 rounded-lg w-full object-cover"
                  alt="Cover"
                />
                <div className="flex justify-center">
                  <img
                    src={iconImage}
                    className="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                    alt="icon"
                  />
                </div>
                <div className="py-2 px-2">
                  <div className=" font-bold font-title text-center">
                    {title}
                  </div>

                  <div className="text-sm font-light text-center my-2">
                    {description}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
