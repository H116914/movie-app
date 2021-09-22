import React, {useState, useEffect} from "react";
import MovieList from '../view/MovieList';
import {Movie} from "../interface/interface"
import MovieTiles from '../view/MovieTiles';

const Sort = (props:any) =>{

    const [sorted, setSorted] = useState<boolean>(false);
    const [sortParam, setSortParam] = useState<string>("");
    const [reverse, setReverse] = useState<boolean>(false);
    const [movies, setMovies]=useState<Movie[]>([]);
    const [moviesList, setMovieList]=useState<Movie[]>([]);

    useEffect(()=>{
        const sortArray = (type:string) => {
          const types:any = {
            imdbID: 'imdbID',
            Title: 'Title',
            Genre: 'Genre',
            imdbRating: 'imdbRating',
            Year: 'Year',
            Runtime: 'Runtime',
            Language: "Language",
            BoxOffice: "BoxOffice"
          };
          const sortProperty:any = types[type]; 
    
          if(sortParam === "Runtime" ||sortParam === "BoxOffice"){
            const sortedMovies = [...props.movies].sort((a:any, b:any) => { 
              if (a[sortProperty].match(/(\d+)/) === null){
                return -1
              }else if(b[sortProperty].match(/(\d+)/) === null){
                return 1
              }else 
                return a[sortProperty].match(/(\d+)/)[0] - b[sortProperty].match(/(\d+)/)[0]
            });
            reverse?setMovies(sortedMovies.reverse()):setMovies(sortedMovies);
    
          }else{
          const sortedMovies = [...props.movies].sort((a:any, b:any) => { 
            if(a[sortProperty] > b[sortProperty]){
              return 1;
            }else if(a[sortProperty] < b[sortProperty]){
              return -1;
            }else {
              return 0}
          });
          reverse?setMovies(sortedMovies.reverse()):setMovies(sortedMovies);
          setMovieList(movies);
          setSorted(true)
        }}
        sortArray(sortParam);        
      }, [sortParam, reverse, props.movies]);

      useEffect(()=>{
        const moviesArrayGenre = moviesList.filter((a)=>(a.Genre.indexOf(props.genre) >= 0))
        setMovies(moviesArrayGenre);
      },[props.genre]);

      const handleSortParameter = (param:string) =>{
        if(param !== sortParam){
          setSortParam(param)
          setReverse(false);
        }else{
          setReverse(!reverse);}
      }

return(
    <div className="body">
    {props.listView && sorted?<MovieList movies={movies} onSort={(param:string)=>handleSortParameter(param)}/>:<h1>{props.message}</h1>}
    {!props.listView && sorted?<MovieTiles movies={movies}/>:<h1>{props.message}</h1>}
    </div>
)
}
export default Sort