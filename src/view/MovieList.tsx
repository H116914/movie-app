import React, { useState } from "react";
import "./MovieList.css";
import { Movie } from "../interface/interface";
import altImg from "../componenets/img/altImg.jpg";

const MovieList = (props: any) => {
    const [clicked, setClicked] = useState<string>("");

    const handleSorting = (e: any) => {
        props.onSort(e.target.id);
        e.preventDefault();
    }
    const onClicked = (imdbID: string) => {
        if (clicked === imdbID) {
            setClicked("");
        } else setClicked(imdbID);
    }

    return (
        <div key="Show" className="show">
            <table>
                <thead>
                    <tr>
                        <th id="Title" onClick={e => handleSorting(e)}>Title</th>
                        <th id="Year" onClick={e => handleSorting(e)}>Year</th>
                        <th id="imdbRating" onClick={e => handleSorting(e)}>imdbRating</th>
                        <th id="Runtime" onClick={e => handleSorting(e)}>Runtime</th>
                        <th id="Genre" onClick={e => handleSorting(e)}>Genre</th>
                        <th id="Language" onClick={e => handleSorting(e)}>Language</th>
                        <th id="BoxOffice" onClick={e => handleSorting(e)}>BoxOffice</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map((movie: Movie, index: number) =>
                        <React.Fragment key={index}>
                            <tr onClick={() => onClicked(movie.imdbID)} className="show-element">
                                <td className="show-element"> {movie.Title} </td>
                                <td className="show-element"> {movie.Year} </td>
                                <td className="show-element"> {movie.imdbRating} </td>
                                <td className="show-element"> {movie.Runtime} </td>
                                <td className="show-element"> {movie.Genre} </td>
                                <td className="show-element"> {movie.Language} </td>
                                <td className="show-element"> {movie.BoxOffice} </td>
                                {movie.Poster !== "N/A" ? <td className="show-element"><img src={movie.Poster} alt="no img" width="150px" height="200px" /></td>
                                    : <td className="show-element"><img src={altImg} alt="no img" width="150px" height="200px" /></td>}
                            </tr>
                            {clicked === movie.imdbID ? (
                                <tr className="container">
                                    <td colSpan={100} >
                                        <img src={movie.Poster} alt="no img" className="img" />
                                        <p className="Plot">PLOT</p>
                                        <p className="Plot">{movie.Plot}</p><br />
                                        <p className="Actors">ACTORS</p>
                                        <p className="Actors">{movie.Actors}</p><br />
                                        <p className="Director">DIRECTORS</p>
                                        <p className="Director">{movie.Director}</p>
                                    </td>
                                </tr>
                            ) : null}
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default MovieList;