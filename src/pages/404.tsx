import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenterContainer from "../components/center-container"

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <section className="my-14">
        <CenterContainer>
          <h3 className="text-gray-800 font-mono my-6">
            <span className="font-bold text-5xl">404</span>
          </h3>
          <p className="text-2xl text-gray-500">Page Not Found. Go <Link to="/" className="underline hover:text-gray-400">home</Link>.</p>
        </CenterContainer>
      </section>
    </Layout>
  )
}

export default NotFoundPage
