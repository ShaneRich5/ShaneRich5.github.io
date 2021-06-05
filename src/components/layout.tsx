import React from "react"
import Navbar from "./navbar"

const Layout: React.FC = ({ children}) => {
  return (
    <main className="min-h-screen bg-white">
      <title>Shane Richards</title>
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout