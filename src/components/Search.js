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
      <div class="flex items-center mt-2 mb-6">
        <svg
          class="w-4 h-4 fill-current ml-4 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          type="text"
          placeholder="Cari artikel di sini..."
          class="w-full -ml-8 pl-10 px-4 py-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent bg-gray-800"
          autoFocus
          value={query}
          onChange={e => {
            navigate(e.target.value ? `/blog/?search=${e.target.value}` : "")
            setQuery(e.target.value)
          }}
        />
      </div>
      <section>
        {query ? (
          results.length > 0 && <Posts data={results} />
        ) : (
          <Posts data={posts} showYears />
        )}
      </section>
    </>
  )
}
