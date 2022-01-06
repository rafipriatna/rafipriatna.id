import React from 'react'
import { Link } from 'gatsby'

const PostCell = ({ node, query }) => {

    const getTitle = (title, query) => {
        if (query) {
            const re = new RegExp(query.replace(/[\s.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
            const highlightStart = title.search(re)

            if (highlightStart !== -1) {
                const highlightEnd = highlightStart + query.length

                return (
                    <h2>
                        {title.slice(0, highlightStart)}
                        <strong className="text-royal">
                            {title.slice(highlightStart, highlightEnd)}
                        </strong>
                        {title.slice(highlightEnd)}
                    </h2>
                )
            }
            return <h3>{title}</h3>
        }
        return <h3>{title}</h3>
    }

    return (
        <Link to={node.slug} key={node.id} className='text-xl transition duration-200 ease-in-out'>
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline my-5 cursor-pointer overflow-hidden transform hover:scale-105 duration-500">
                <dl>
                    <dd className="text-base font-medium leading-6  dark:text-white">
                        {node.date}
                    </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                        <div>
                            {getTitle(node.title, query)}
                            <div className="flex flex-wrap prose text-gray-700 max-w-none dark:text-gray-400 my-2">
                                {node.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Posts({ data = [], showYears, query }) {
    if (showYears) {
        const postsByYear = {}

        data.forEach((post) => {
            const year = post.date.split(' ').pop()

            postsByYear[year] = [...(postsByYear[year] || []), post]
        })

        const years = Object.keys(postsByYear).reverse()
        return years.map((year) => (
            <section key={year}>
                <h2 className="text-3xl mb-6 mt-10">{year}</h2>
                {postsByYear[year].map((node) => (
                    <PostCell key={node.id} node={node} query={query} />
                ))}
            </section>
        ))
    } else {
        return (
            <div>
                {data.map((node) => (
                    <PostCell key={node.id} node={node} query={query} />
                ))}
            </div>
        )
    }
}