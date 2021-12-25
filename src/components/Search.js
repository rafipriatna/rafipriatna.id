import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"

import Posts from "./Posts"

export default function Search({ posts, location, navigate }) {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  )

  return (
    <>
      {/* <div className="flex items-center mt-2 mb-6 ml-4 w-full">
        <svg
          className="w-4 h-4 fill-current z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          type="text"
          placeholder="Ketik di sini untuk mulai mencari."
          className="w-full -ml-8 pl-10 py-2 rounded-none ring-1 bg-gray-200 focus:outline-none focus:ring-blue-600 ring-gray-400 dark:ring-gray-600 dark:focus:ring-blue-600 dark:bg-gray-800"
          value={query}
          onChange={e => {
            navigate(e.target.value ? `/blog/?search=${e.target.value}` : "")
            setQuery(e.target.value)
          }}
        />
      </div> */}
      <div className="relative max-w-lg">
        <input
          aria-label="Ketik di sini untuk mulai mencari..."
          type="text"
          value={query}
          onChange={e => {
            navigate(e.target.value ? `/blog/?search=${e.target.value}` : "")
            setQuery(e.target.value)
          }}
          placeholder="Ketik di sini untuk mulai mencari..."
          className="block w-full px-4 py-2 text-gray-900 dark:text-gray-200 bg-white ring-1 rounded-md ring-1 focus:outline-none focus:ring-royal ring-gray-400 dark:ring-gray-600 dark:focus:ring-royal dark:bg-transparent"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <section>
        {query ? (
          results.length > 0 ? (
            <Posts data={results} showYears query={query} />
          ) : (<p className="text-center text-2xl py-5">Kamu nyari apa? Ndak nemu nih
            <span role="img" aria-label="sad_icon">
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
