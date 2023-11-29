import React, { useState } from 'react'
import { parse } from 'querystring-es3'

// Components
import Posts from './post'

// Helper
import JsSearchFunction from '../lib/js-search'

export default function Search({ posts, location }) {
    const { q } = parse(location.search)
    const [query, setQuery] = useState(q || '')
    const results = JsSearchFunction(posts, query)

    return (
        <>
            <div className='relative'>
                <input
                    aria-label='Ketik di sini untuk mulai mencari...'
                    type='text'
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }}
                    placeholder='Ketik di sini untuk mulai mencari...'
                    className='block w-full px-4 py-2 text-gray-900 dark:text-gray-200 bg-white ring-1 rounded-md ring-1 focus:outline-none focus:ring-royal ring-gray-400 dark:ring-gray-600 dark:focus:ring-royal dark:bg-transparent'
                />
                <svg
                    className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                </svg>
            </div>
            <section>
                {query ? (
                    results.length > 0 ? (
                        <Posts data={results} showYears query={query} />
                    ) : (<p className='text-center text-2xl my-20'>Kamu nyari apa? Ndak nemu nih
                        <span role='img' aria-label='sad_icon'>
                            😥
                        </span>
                    </p>)
                ) : (
                    <Posts data={posts} showYears />
                )}
            </section>
        </>
    )
}
