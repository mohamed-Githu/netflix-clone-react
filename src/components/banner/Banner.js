import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from '../../requests'

import './banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests[0].fetchMovies);
      const randoumNumber = Math.floor(Math.random() * request.data.results.length - 1)
      setMovie(request.data.results[randoumNumber]);
    }
    fetchData();
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  
  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(to bottom , transparent 70% , rgba(37, 37, 37, .61), #111) ,url(
        "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
      )`,
      backgroundPosition: 'top'
      }} >
      <div className='banner__content'>
          <h1 className="banner__title">
            { movie?.title || movie?.name || movie?.original_name }
          </h1>
          <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My list</button>
          </div>
          <h1>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner--fade-bottom'></div>
    </header>
  )
}

export default Banner
