import React from 'react'

import SuggestedCard from './SuggestedCard'

const PostSuggestedCards = () => {
  return (
    <div className='flex flex-col items-center h-full w-screen bg-white dark:bg-black uppercase p-16 md:p-4'>
      <h1 className='text-black dark:text-white pb-2'>Got Ideas? Send 'em here</h1>
      <SuggestedCard />
    </div>
  )
}

export default PostSuggestedCards