
import './App.css';
import{useState,useEffect} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Filter from './components/Filter'
import Movie from './components/Movie'

function App() {
  const [filtered,setFiltered] = useState([])
  const [activeGenre,setActiveGenre] = useState(0)
  const [popular,setPopular] = useState([])



  useEffect(()=>{
    fetchData()
  }
  ,[])

  const fetchData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=34b4c9411afd4aa9012888d78dc93358&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }




  return (
    <div className="App">
      <Filter 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre}
      popular={popular}
      />

<motion.div 
    layout 
     className="popular-movies">
      <AnimatePresence>
      
       {filtered.map((movie) => {
          return  <Movie key={movie.id} movie= {movie}/> 
       })}
      </AnimatePresence>
      
     </motion.div>

     
    </div>
  );
}

export default App;
