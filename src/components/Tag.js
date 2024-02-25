import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [gif, setGif] = useState('');
  // const [loader, setLoader] = useState('false');
  const [tag, setTag] = useState('');
  
  // async function fetchData(){
  //   setLoader(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}&tag=${tag}`
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoader(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])
  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  const {gif, loader, fetchData} = useGif(tag);
  return (
    <div className='bg-blue-500 rounded-md w-1/2 border border-black flex flex-col items-center gap-y-10 mt-[15px]'>
      <h1 className='text-2xl font-bold underline uppercase'>Random {tag} Gif</h1>
      {loader===true?<Spinner/>:<img src={gif} alt="" width="450"/>}
      <input type="text" className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center'
        onChange={changeHandler} value={tag}
      />
      <button onClick={clickHandler} className='w-10/12 bg-white text-lg py-2 opacity-[70%] rounded-md mb-[20px]'>
        Generate
      </button>
    </div>
  )
}


export default Tag
