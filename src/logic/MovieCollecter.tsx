import React, {useState, useEffect} from 'react';
import Header from '../componenets/header/Header';
import axios from "axios"
import Sort from './Sort';
import {Movie} from "../interface/interface"
import camera from "../componenets/img/camera.gif"
import Search from '../componenets/header/Search';
import "./MovieCollecter.css"

function MovieCollecter() {
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("Movie");
  const [pages, setPages] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("Search for a movie or series");
  const [moviesCollected, setMoviesCollected]  = useState<boolean>(false);
  const [movies, setMovies]=useState<Movie[]>([]);
  const [genre, setGenre]=useState<string>();
  const [darkMode, setDarkMode]= useState<boolean>(true);
  const [listView, setListView]= useState<boolean>(true);

  const handlePages = (pages:number) => {
    if(pages ===1){
      setPages([1])
    }else if(pages ===2){
      setPages([1,2])
    }else
      setPages([1,2,3,4])
  }

  const handleSearch = (search:string, type:string, numPages:number) =>{
    setMessage("Loading...")
    setType(type);
    handlePages(numPages);
    setSearch(search);
    setMoviesCollected(false)
  }

  useEffect(()=>{
  let id =[{imdbID:""}];

    if(search !== ""){
      let i = 0;
      pages.forEach((page) =>{
        axios.get(`http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=213d1193`)
          .then(res => {setMessage(res.data.Error); id =res.data.Search; if(res.data.Response === "True"){
            id.forEach(ID => axios.get(`http://www.omdbapi.com/?i=${ID.imdbID}&plot=full&apikey=213d1193`)
              .then(rep =>{i === 0 ? setMovies([rep.data]):setMovies(movies =>[...movies, rep.data]);i++})
            )
          }else{}})
          setMoviesCollected(true)
      }) 
    }
  },[search, type, pages]);

  const onChangeLooks = (mode:boolean, listView:boolean) => {
    setDarkMode(mode)
    setListView(listView)
  }
  useEffect(()=>{
    document.body.classList.toggle("dark-mode");
  },[darkMode])

  return(
    <div className="body">
       <Header onSubmit={(search:string, type:string, numPages:number)=>handleSearch(search, type, numPages)}
        onSortByGenre={(genre:string)=>setGenre(genre)}
        onChangeLooks ={(darkMode:boolean, listView:boolean)=>onChangeLooks(darkMode, listView)}/>
       
       {(message===undefined && moviesCollected)?<Sort movies={movies} message={message} genre={genre} listView={listView}/>
       :<div className="app-search"> <img src={camera} alt="bilde"/>
         <h1>{message}</h1><Search onSubmit={(search:string, type:string, numPages:number, tile:boolean)=>handleSearch(search, type, numPages)}/>
         </div>}
    </div>
  )
}

export default MovieCollecter;

