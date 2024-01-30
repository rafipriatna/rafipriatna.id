import React from 'react'
import { Link } from 'gatsby'

// Lib
import showBySection from '../lib/showBySection'

export default function CheatSheetsCard({ data }) {
    const postsBySections = showBySection(data)
    const sections = Object.keys(postsBySections).reverse()

    return sections.map((section) => (
        <section key={section} className='space-y-2'>
            <div className='flex w-full items-center text-left leading-none'>
                <h2 className='text-sm font-medium'>{section}</h2>
            </div>
            <ul className='list-none pl-0'>
                {postsBySections[section].map((node) => (
                    <Item key={node.id} node={node} />
                ))}
            </ul>
        </section>
    ))
}

const Item = ({ node }) => {
    return (
        <li className='text-slate-800 pl-0 my-0'>
            <Link to={`/cheatsheets/` + node.fields.slug}
                key={node.id}
                className='flex w-full items-center border-l-2 border-indigo-300 py-1 pl-2 text-sm dark:text-gray-200 hover:text-indigo-600 no-underline hover:border-indigo-600 dark:hover:text-indigo-400 dark:border-slate-600 dark:hover:border-indigo-400'
                activeClassName='text-indigo-600 dark:text-indigo-400 border-l-2 border-indigo-600 dark:border-indigo-400 bg-indigo-200 bg-opacity-30 dark:bg-opacity-20'
            >
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-2 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                    </svg>
                </div>
                {node.frontmatter.title}
            </Link>
        </li>
    )
}