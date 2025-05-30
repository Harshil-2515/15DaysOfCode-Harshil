import { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com/?apikey=#####" // Add API Key

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")   // Text in search input
  const [movies, setMovies] = useState([])           // List of fetched movies

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)   // Call API
    const data = await response.json()                      // Convert to JSON
    setMovies(data.Search || [])                            // Set movies array
  }

  useEffect(() => {
    searchMovie("Cars")       // Default search on load
  }, [])

  return (
    <div className="app">
      <h1>Movie Land</h1>

      {/* Search Bar */}
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {/* Movie List */}
      {
        movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App
