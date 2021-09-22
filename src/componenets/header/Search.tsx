import React, {useCallback, useState} from "react";
import "./Search.css";

const Search = (props:any) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [type, setType] = useState<string>("movie");
    const [numPages, setNumPages] = useState<number>(1);

    const handleNumPages = (pages:string) => {
        setNumPages(parseInt(pages));
    }
    
    const handleSelectType = (type:string) => {
        setType(type)
    }

    const handleChange = (e:any) => {
        setSearchInput(e.target.value);
    }
    const handleSubmit = (e:any) => {
        props.onSubmit(searchInput, type, numPages);
        e.preventDefault();

    }

    return(
        <section className="search">
            <form onSubmit={(e)=>handleSubmit(e)} name="Type" className="search">
                <select value={numPages} onChange={(pages)=>handleNumPages(pages.target.value)} className="search-element">
                    <option value="1" className="options">10 results</option>
                    <option value="2" className="options">20 results</option>
                    <option value="4" className="options">40 results</option>
                </select>
                <select value={type} onChange={(type)=>handleSelectType(type.target.value)} className="search-element" >
                    <option value="movie" className="options">Movie</option>
                    <option value="series" className="options">Series</option>
                </select>
                <section>
                    <input key="input" value={searchInput} type="text" placeholder="Search" onChange={(e)=>(handleChange(e))} className="searchFeld"/>
                </section>
            </form>
        </section>
    )
}

export default Search