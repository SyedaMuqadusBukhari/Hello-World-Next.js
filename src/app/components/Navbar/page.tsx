import Link from "next/link";
import React from 'react'

export default function Navbar() {
  return (
    <div className=" bg-green-500 h-14">
      <div className='text-gray-100 flex justify-between items-center '>
      <Link href="https://nextjs.org/">  <h1 className=" text-2xl flex gap-4 m-3 hover:bg-yellow-300 "> Next.js </h1> </Link>
        <ul className="flex gap-5 mr-5 text-xl">
           <Link className="hover:bg-yellow-300" href="/components/About">About</Link> 
           <Link className="hover:bg-blue-300" href="/components/Services">Services</Link>
           <Link className="hover:bg-orange-200" href="/components/Contact">Contact</Link>
        </ul>
        </div>
    </div>
  )
}