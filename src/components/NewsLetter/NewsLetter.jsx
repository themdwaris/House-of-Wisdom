import React from 'react'

const NewsLetter = () => {
  return (
    <div className="my-12 md:my-20 bg-gradient-to-r from-violet-100 to-yellow-100 md:px-7">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center py-24 gap-10 md:gap-4 px-6 items-center">
      <div className="">
        <h1 className="max-w-md text-gray-700 font-bold text-4xl md:text-5xl">
        Subscribe to our news letter.
        </h1>
        <p className="max-w-lg text-gray-700 text-xl pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aut?</p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 items-center">
        <input className="w-full md:w-[70%] border-none outline-none py-3 px-4 text-xl text-gray-700 rounded-3xl"type="email" placeholder="Email"/>
        <button className="w-full md:w-fit border-none outline-none py-3 px-5 bg-yellow-100 rounded-3xl text-gray-700 text-xl font-semibold cursor-pointer hover:bg-yellow-200">Subscribe</button>
      </div>
    </div>
  </div>
  )
}

export default NewsLetter