import * as React from 'react'

// Layout
import Layout from '../layouts/default'

// Components
import Hero from '../components/hero'

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Hero />

      <h1 className="text-3xl my-10 pt-10 font-semibold">Artikel terbaru</h1>
    </Layout>
  )
}

export default IndexPage
