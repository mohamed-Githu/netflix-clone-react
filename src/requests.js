const API_KEY = '0be345142c18791917fa34342770b25a';

const requests = [
  {
    fetchMovies: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    title: 'NETFLIX ORIGINALS'
  },
  {
    fetchMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: 'Trending Now'
  },
  {
    fetchMovies: `/movie/top_rated?api_key=${API_KEY}`,
    title: 'Top Rated'
  },
  {
    fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: 'Action Movies'
  },
  {
    fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: 'Comedy Movies'
  },
  {
    fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: 'Horror Movies'
  },
  {
    fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: 'Romance Movies'
  },
  {
    fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: 'Documentaries'
  }
]

export default requests;