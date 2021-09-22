import React from "react";
import "./Navbar.css"

const Navbar=(props:any)=>{

const handleSortByGenre = (e:any) =>{
    props.onSortByGenre(e.target.value)
    e.preventDefault()
}

return(
    <section className="navbar">
        <button value="Action" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Action </button>
        <button value="Drama" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Drama </button>
        <button value="Sci-Fi" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Sci-Fi </button>
        <button value="Fantasy" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Fantasy </button>
        <button value="Thriller" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Thriller </button>
        <button value="Horror" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Horror </button>
        <button value="Comedy" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> Comedy </button>
        <button value="" className="navbar-element" onClick={(e)=>{handleSortByGenre(e)}}> All </button>
    </section>
)
}
export default Navbar