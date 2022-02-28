import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Posts({ data, showYears }) {

    const postsByYear = {}

    data.forEach((post) => {
        const year = post.date.split(' ').pop()

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

    const type = node.icon?.type || null
    let thumbnail = ''
    if (type === 'emoji') {
        thumbnail = <span role='img'>{node.icon.emoji}</span>
    } else if (type === 'file') {
        thumbnail = <GatsbyImage className='w-7 h-7 rounded' alt='Thumbnail' image={node.icon.remoteImage.childImageSharp.gatsbyImageData} />
    } else if (type === 'external') {
        thumbnail = <img className='w-7 h-7 rounded' alt='Thumbnail' src={node.icon.external.url} />
    } else {
        thumbnail = <span role='img'>📝</span>
    }

    return (
        <Link to={node.slug} key={node.id}>
            <div className='transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-1 lg:mt-4 mt-2'>
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

