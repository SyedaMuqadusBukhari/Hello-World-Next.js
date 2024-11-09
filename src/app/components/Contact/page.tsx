import Link from 'next/link'
import React from 'react'

const  Contact = () => {
  return (
    <div className='bg-pink-300 text-blue-700 m-4 p-5'> 
        <h1 className='bg-blue-300 flex text-2xl m-5 p-4'>Contact</h1>
        <p  className='bg-slate-200 text-blue-900 h-10 flex justify-content items-center'>If you wanna contact me here is my linked in </p>
        <button className='border-2 m-5'> <Link href="linkedin.com/in/shah-muqadus-58513a2b5">Linkedin</Link> </button>
    </div>
  )
}

export default  Contact