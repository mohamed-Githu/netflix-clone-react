import React from 'react';

import MoviesRow from '../moviesRow/MoviesRow';

import requests from '../../requests';

const RowsList = () => {
  return (
    <div>
      {
        requests.map((request, index) => {
          return (
            <MoviesRow 
              key={index}
              isLarge={request.title === 'NETFLIX ORIGINALS' ? true : false} 
              title={request.title} 
              fetchUrl={request.fetchMovies}
            />
          )
        })
      }
    </div>
  )
}

export default RowsList
