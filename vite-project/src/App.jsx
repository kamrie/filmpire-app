import {useEffect, useState} from 'react'
import './App.css'
import SearchIcon  from './search.svg'
import MovieCard from  './MovieCard'

// 381168a
 const API_URL = "http://www.omdbapi.com?apikey=381168a"

const movie1 ={
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {

  const[movies, setMovies] = useState([])
  const[searchTerm, setSearchTerm] = useState('')


// ------------------------------------------------
  const searchMovies = async (title) => {
      const res = await fetch(`${API_URL}&s=${title}`)
      const data = await res.json()

      setMovies(data.Search)
  }
// ------------------------------------------------
  useEffect(()  => {
    searchMovies(`shrek`)
  }, [])

 
  return(
  <>
    <div className="app">
          <h1>Movie box</h1>

          <div className="search">
              <input /*ref={todoName}*/ placeholder="Search for movies" 
                    value={searchTerm} 
                    onChange={(e) => { setSearchTerm(e.target.value)}} 
              />
              <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
            />
          </div>
          

           {movies.length > 0 
               ? (
                 
                  <div className="container">
                   {movies.map( (movie) => (
                   <MovieCard movie ={movie}/>       
                    ))}
                  </div>
               ) : (
                  <div className="empty">
                  <h2>No movies found</h2>
                  </div>
               )}

    </div>
  </>
  )
  
}




export default App























// const App = () => {
//    const[count, setCount] = useState(0)

//    useEffect(() => {
//       alert( count )
//    },[count])

//   return (
//     <div className="App">
//       <button onClick ={() => setCount((prevCount) => prevCount -1)}>-</button>
//        <h2>{count}</h2>
//        <button onClick= {() => setCount((prevCount) => prevCount +1)}>+</button>
       
//     </div>
//   )
// }
