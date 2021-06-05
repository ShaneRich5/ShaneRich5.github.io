import React from "react"
import Layout from "../components/layout"
import CenterContainer from "../components/center-container"
import profilePicture from "../images/profile-pic.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <title>Shane Richards</title>
      <div className="bg-gray-200">
        <CenterContainer>
          <div className="grid grid-cols-3 py-12">
            <div className="col-span-2 flex flex-col justify-center pr-20">
              <h3 className="mb-8 text-5xl font-bold font-mono text-gray-700">I'm Shane Richards.</h3>
              <p className="text-2xl">
                I'm a full stack developer based in NYC who's strives to solve problems with the best tools available. I hope this blog convinces you of that!
              </p>
            </div>
            <div className="relative aspect-w-1 aspect-h-1 border-2 border-black">
              <div className="absolute bg-black top-1 left-1 font-mono"></div>
              <img src={profilePicture} alt="" />
            </div>
          </div>
        </CenterContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
