import React, { useState } from 'react'

const SuggestedCard = () => {
    const [content, setContent] = useState("")

  return (
    <div class="flex flex-col items-center justify-start p-4 rounded-xl bg-white dark:bg-black shadow-md border-2 border-black dark:border-white h-96 w-72">
        <div class="flex items-center justify-center m-auto w-full h-full">
            <textarea 
                type="text"
                placeholder="Give it to me"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="text-black dark:text-white text-center text-lg md:text-xl w-full h-full uppercase object-contain outline-none resize-none overflow-auto"
            />
        </div>
        <div>
            <h1 className="text-xs md:text-sm font-serif dark:text-white">CARDS FOR INSANITY</h1>
        </div>
   
</div>
  )
}

export default SuggestedCard