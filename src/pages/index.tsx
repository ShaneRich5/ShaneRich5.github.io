import React from "react"
import logo from "../images/logo-icon.png"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <title>Shane Richards</title>
      <header className="max-w-3xl mx-auto my-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} width={42}  alt="floppy disk logo" />
            <h1 className="font-sans font-semibold text-2xl">Shane Richards</h1>
          </div>
          <nav className="space-x-6">
            <a className="font-sans text-xl" href="/projects">Projects</a>
            <a className="font-sans text-xl" href="/about">About Me</a>
            <a className="font-sans text-xl" href="/about">Resume</a>
          </nav>
        </div>
      </header>
    </main>
  )
}

export default IndexPage
