import React, {useState} from "react";
import {Movie} from "../interface/interface"
import "./MovieTiles.css"
import altImg from "../componenets/img/altImg.jpg"

const MovieTiles  = (props:any) =>  {
    // const [clicked, setClicked] = useState<string>("");
        
    // const handleSubmit = (e:any) => {
    //         props.onSubmit(e.target.id);
    //         e.preventDefault()
    // }
    // const onClicked = (imdbID:string)=>{
    //     if (clicked === imdbID){
    //         setClicked("")            
    //     }else setClicked(imdbID);
    // }

    return(
        <div className="tile">
                {props.movies.map((movie:Movie, index:number) =>
                    <div key={index} className="tiles">
                    <div className="tile-container" onClick={(e)=> e.currentTarget.classList.toggle("flip")}>
                    <div className="tile-container--front">
                    
                    {movie.Poster!=="N/A"?<img src={movie.Poster} alt="no img"/>
                    :<img src={altImg} alt="no img"/>}
                        <div>
                            <p className="score">{movie.imdbRating}</p>
                        </div>

                        <div className="overlay">
                            <p>GENRE</p>
                            <p>{movie.Genre}</p><br />
                            <p>ACTORS</p>
                            <p>{movie.Actors}</p>
                            <p>DIRECTORS</p>
                            <p>{movie.Director}</p>
                        </div>        
                    </div>

                    <div className="tile-container--back">
                            <p className="title">{movie.Title}</p>
                            <p>PLOT</p> 
                            <p>{movie.Plot}</p><br />
                            <p>Year: {movie.Year}</p>
                            <p>Runtime: {movie.Runtime}</p>
                            <p>Language: {movie.Language}</p>
                    </div>
                    </div>
                    </div>
                )}
        </div>
        
    );
}
export default MovieTiles