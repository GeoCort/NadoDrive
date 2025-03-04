import React from 'react'

export default function Card({icon,title,desc}) {
  return (
    <div className=' border-2 border-black rounded-md max-w-96 flex flex-col p-10 text-zinc-800 mx-auto bg-zinc-50'>
        <span className='text-5xl mx-auto my-5'>{icon}</span>
        <h3 className='font-semibold text-2xl text-center'>{title}</h3>
        <p className='text-lg text-center'>{desc}</p>
    </div>
  )
}
