import React from "react"
import Layout from "../components/layout"
import CenterContainer from "../components/center-container"
import profilePicture from "../images/profile-pic.jpg"

const projects = [
  {
    emoji: "💰",
    title: "Crowd Coin",
    description: "A lottery powered by Ethereum.",
    link: "https://github.com/ShaneRich5/crowd-coin-web",
  },
  {
    emoji: "🌤️",
    title: "Meteo",
    description: "A minimal Tailwind weather app.",
    link: "https://meteo-forecast.netlify.app/",
  },
  {
    emoji: "🖥️",
    title: "Github IO",
    description: "Source code for this Gatsby website.",
    link: "https://github.com/ShaneRich5/shanerich5.github.io",
  },
  {
    emoji: "🐷",
    title: "Pig Latin",
    description: "A fun spin on Google Translate.",
    link: "https://github.com/ShaneRich5/piglatin-android",
  },
  {
    emoji: "📸",
    title: "Meme Me",
    description: "A meme generating machine.",
    link: "https://github.com/ShaneRich5/meme-me-v2",
  },
  {
    emoji: "🖼️",
    title: "Photoshop Battles",
    description: "Photo competition from the best subreddit.",
    link: "https://github.com/ShaneRich5/photoshop-battles",
  },
  {
    emoji: "👂",
    title: "Morse Code",
    description: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    link: "https://github.com/ShaneRich5/morse-code",
  },
  {
    emoji: "🗺️",
    title: "On The Map",
    description: "A virtual hub for student globaly.",
    link: "https://github.com/ShaneRich5/on-the-map",
  },
  {
    emoji: "🎵",
    title: "Pitch Perfect",
    description: "Adjusts the sound of your voice.",
    link: "https://github.com/ShaneRich5/pitch-perfect",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <title>Shane Richards</title>
      <section className="bg-gray-200">
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
      </section>
      <section className="my-14">
        <CenterContainer>
          <h3 className="text-gray-800 font-mono border-b-4 border-gray-800 mb-6 pb-2 flex justify-between">
            <span className="font-bold text-4xl ">Favorite Projects.</span>
            <a href="/projects" className="bg-gray-100 text-base p-2 rounded hover:bg-gray-200">View all</a>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 py-3">
            {projects.map(project => (
              <div className="col-span-1" key={project.title}>
                <a href={project.link} target="_blank">
                  <h4 className="text-2xl flex">
                    <span className="mr-2">{project.emoji}</span>
                    <span className="underline font-semibold text-gray-500">{project.title}</span>
                  </h4>
                </a>
                <p className="text-xl text-gray-400 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </CenterContainer>
      </section>
    </Layout>
  )
}

export default IndexPage
