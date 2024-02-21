import React, { useState } from 'react'

const Random = () => {
    const [gif, setGif] = useState('');
    function clickHandler(){
        return;
    }

  return (
    <div className='bg-green-500 rounded-md w-1/2 border border-black flex flex-col items-center gap-y-10 mt-[15px]'>
      <h1 className='text-2xl font-bold underline uppercase'>A Random Gif</h1>
      <img src={gif} alt="" width="450"/>
      <button onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
