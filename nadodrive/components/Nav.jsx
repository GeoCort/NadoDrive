'use client'
import React, { useState } from 'react'
import { GiTornado } from "react-icons/gi"
export default function Nav() {
  const [user, setUser] = useState("")
  return (
    <header>
        <nav className='bg-zinc-100 text-zinc-800 flex justify-between items-center px-5 shadow-2xl'>
            <div className='text-4xl' >
            <GiTornado/>
            </div>
            {user == ''? <div>
              <button className='px-4 py-2 bg-zinc-50 border-2 border-black rounded-xl mx-4'>Login</button>
              <button className='px-4 py-2 bg-zinc-800 border-2 border-zinc-800  text-red-50 rounded-xl '>Sign Up</button>
            </div>
             :  <div>Logged in</div>}
        </nav>
    </header>
  )
}
