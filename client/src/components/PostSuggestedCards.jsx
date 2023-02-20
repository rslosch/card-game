import React from 'react'

import SuggestedCard from './SuggestedCard'

const PostSuggestedCards = () => {
  return (
    <div className='flex flex-col items-center h-full w-screen'>
      <h2>Got Ideas? Post em here</h2>
      <SuggestedCard />
    </div>
  )
}

export default PostSuggestedCards