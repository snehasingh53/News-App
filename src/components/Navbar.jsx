import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-40 bg-white">
        <div className="md:flex items-center justify-between py-4 px-6">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            News-App
          </div>
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-8">
              {Links.map((link) => (
                <li key={link.name} className="text-xl">
                  <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="ml-4 rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Subscribe
            </button>
          </div>
          <div className="md:hidden flex items-center ml-auto">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">News-App</div>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            >

              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-4 space-y-4">
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-3 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="mt-4 w-full rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Subscribe
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
