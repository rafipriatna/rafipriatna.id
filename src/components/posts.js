import React, { useMemo } from 'react'
import { Link } from 'gatsby'

const PostCell = ({ node }) => {

    return (
        <Link to={node.slug} key={node.id}>
            <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 lg:mt-4 mt-2">
                <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0">
                    <div className="text-lg flex flex-col lg:flex-row">
                        {node.title}
                    </div>
                    <div className="text-md flex flex-col lg:flex-row lg:block hidden">
                        <span>{node.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Posts({ data, showYears }) {
    const postsByYear = {}
    
    data.forEach((post) => {
        const year = post.date.split(' ').pop()

        postsByYear[year] = [...(postsByYear[year] || []), post]
    })

    const years = useMemo(() => Object.keys(postsByYear).reverse(), [postsByYear])

    if (showYears) {
        return years.map((year) => (
            <section key={year}>
                <h2 className="text-3xl mb-6 mt-10 px-2">{year}</h2>
                {postsByYear[year].map((node) => (
                    <PostCell key={node.id} node={node} />
                ))}
            </section>
        ))
    } else {
        return (
            <div>
                {data.map((node) => (
                    <PostCell key={node.id} node={node} />
                ))}
            </div>
        )
    }
}