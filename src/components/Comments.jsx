import React from 'react'

import Comment from '../components/Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h1 className='text-xl text-gray-500 underline'>Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea className='w-full p-4 rounded-xl' placeholder='Write a comment...' name="" id=""></textarea>
        <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>Send</button>
      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments