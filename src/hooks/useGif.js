import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useGif = (tag) => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}&tag=${tag}`;

    const [gif, setGif] = useState('');
    const [loader, setLoader] = useState('false');

    async function fetchData(tag){
        // console.log(tag);
      setLoader(true);
      const {data} = await axios.get(tag ?tagMemeUrl:randomMemeUrl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoader(false);
    }

    useEffect(()=>{
      fetchData();
    },[])

    return {gif, loader, fetchData};
}

export default useGif
