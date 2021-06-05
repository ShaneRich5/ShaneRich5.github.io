import React from "react"
import Layout from "../components/layout"
import CenterContainer from "../components/center-container"

const ResumePage = () => {
  return (
    <Layout>
      <title>Resume | Shane Richards</title>
      <section className="my-14">
        <CenterContainer>
          <h3 className="text-gray-800 font-mono my-6">
            <span className="font-bold text-5xl">Shane Richards</span>
          </h3>
          <p className="text-2xl text-gray-500">Software Engineer in New York, NY</p>
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </CenterContainer>
      </section>
    </Layout>
  )
}

export default ResumePage