import React from 'react'
import { Link } from 'gatsby'

export default function Posts({ data, showYears }) {

    const postsByYear = {}

    data.forEach((post) => {
        const year = post.date.split('/').pop()

        postsByYear[year] = [...(postsByYear[year] || []), post]
    })

    const years = Object.keys(postsByYear).reverse()

    if (showYears) {
        return years.map((year) => (
            <section key={year} className='my-14'>
                <h2 className='text-3xl mb-5'>{year}</h2>
                {postsByYear[year].map((node) => (
                    <PostItem key={node.id} node={node} />
                ))}
            </section>
        ))
    } else {
        return (
            <div>
                {data.map((node) => (
                    <PostItem key={node.id} node={node} />
                ))}
            </div>
        )
    }
}

const PostItem = ({ node }) => {

    const icon = node.icon || null
    let thumbnail = ''
    if (icon !== null) {
        thumbnail = <span role='img'>{node.icon}</span>
    } else {
        thumbnail = <span role='img'>📝</span>
    }

    return (
        <Link to={node.slug} key={node.id}>
            <div className='transition duration-200 ease-in-out hover:bg-indigo-500 dark:hover:bg-indigo-800 hover:text-white rounded-md px-4 py-2 lg:mt-4 mt-2'>
                <div className='lg:flex inline-block lg:flex-row justify-between w-full lg:py-0'>
                    <div className='text-lg flex inline-block lg:flex-row'>
                        <div className='max-w-xs mr-2'>
                            {thumbnail}
                        </div>
                        <h2 >
                            {node.title}
                        </h2>
                    </div>
                    <div className='lg:block hidden'>
                        <span>{node.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

