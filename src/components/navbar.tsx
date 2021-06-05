import React from "react"
import logo from "../images/logo-icon.png"

const navigationLinks = [
  { text: 'Projects', href: '/projects' },
  { text: 'About Me', href: '/about' },
  { text: 'Resume', href: '/resume' },
]

const Navbar = () => {
  return (
    <header className="max-w-4xl mx-auto my-8">
      <div className="flex items-center justify-between">
        <a href="/">
          <div className="flex items-center space-x-2">
            <img src={logo} width={42}  alt="floppy disk logo" />
            <h1 className="font-sans font-semibold text-2xl">Shane Richards</h1>
          </div>
        </a>
        <nav className="space-x-8">
          {navigationLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-lg py-4 px-5 hover:bg-gray-100 rounded-lg"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar