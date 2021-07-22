import React from 'react'
import { Link } from 'gatsby'

const PostCell = ({ node }) => {

    return (
        <Link to={node.slug} key={node.id}>
            <div className="transition rounded-md px-2 py-2 lg:mt-4 mt-2 transition rounded-md px-2 py-2 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800">
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

    
    if (showYears) {
        const postsByYear = {}
    
        data.forEach((post) => {
            const year = post.date.split(' ').pop()
    
            postsByYear[year] = [...(postsByYear[year] || []), post]
        })
    
        const years = Object.keys(postsByYear).reverse()
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