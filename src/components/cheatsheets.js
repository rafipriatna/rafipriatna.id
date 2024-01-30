import React from 'react'
import { Link } from 'gatsby'

// Lib
import showBySection from '../lib/showBySection'

export default function CheatSheets({ data, showSections }) {

    const postsBySections = showBySection(data)

    const sections = Object.keys(postsBySections).reverse()

    if (showSections) {
        return sections.map((section) => (
            <section key={section} className='my-14'>
                <h2 className='text-3xl mb-5'>{section}</h2>
                {postsBySections[section].map((node) => (
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
    return (
        <Link to={node.fields.slug} key={node.id}>
            <div className='transition duration-200 ease-in-out px-4 py-2 lg:mt-4 mt-2 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-400 hover:bg-opacity-10 rounded-md dark:hover:bg-opacity-20'>
                <div className='lg:flex inline-block lg:flex-row justify-between w-full lg:py-0 pt-1'>
                    <div className='text-lg flex inline-block lg:flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-4 h-7 w-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                        </svg>
                        <div>
                            <h2>
                                {node.frontmatter.title}
                            </h2>
                            <span className='block text-sm md:block hidden'>{node.frontmatter.description.replace(/(.{70})..+/, "$1…")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

