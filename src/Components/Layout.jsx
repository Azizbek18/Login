import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'


function Layout() {
  const navigate = useNavigate();
  const logOut = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div className="flex ">
      <aside className="fixed top-0 left-0 h-screen w-[300px] bg-[#1b2533] text-white p-5 flex flex-col gap-3 text-center">
        <div className="mb-6 flex justify-center">
          <NavLink to='/'>
                <img className='w-[110px] h-[100px]' src="./Logo.png" alt="sayt logosi" />
          </NavLink>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
              : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
          }
        >
          Products
        </NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 font-sans font-[600] text-[20px] rounded transition'
  } to="/category">Category</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/discount">Discount</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/sizes">Sizes</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/colors">Colors</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/faq">Faq</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/team">Team</NavLink>
        <NavLink className={({ isActive }) =>
    isActive
      ? 'bg-green-600 text-white px-4 py-2 rounded font-sans font-[600] text-[20px]'
      : 'hover:bg-white hover:text-black px-4 py-2 rounded transition font-sans font-[600] text-[20px]'
  } to="/news">News</NavLink>
      </aside>

      <div className="ml-[300px] flex flex-col w-full min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-end sticky top-0 z-10">
          <button onClick={logOut} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Log Out
          </button>
        </header>
        <main className="p-1 overflow-y-auto flex-grow">{<Outlet/>}</main>
      </div>
    </div>
  )
}

export default Layout
