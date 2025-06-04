import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[220px_1fr] min-h-screen bg-gray-100">
      <aside className="bg-[#1b2533] text-white p-5 flex flex-col gap-4 text-center">
        <div className="mb-6 text-center">
          <NavLink to='/'>
                <img src="./Logo.png" alt="sayt logosi" />
          </NavLink>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-green-600 text-white px-4 py-2 rounded'
              : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
          }
        >
          Products
        </NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/category">Category</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/discount">Discount</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/sizes">Sizes</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/colors">Colors</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/faq">Faq</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/team">Team</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition'
  } to="/news">News</NavLink>
      </aside>

      <div className="flex flex-col">
        <header className="flex justify-end items-center bg-white p-4 shadow">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Log Out
          </button>
        </header>
        <main className="p-6">{<Outlet/>}</main>
      </div>
    </div>
  )
}

export default Layout
