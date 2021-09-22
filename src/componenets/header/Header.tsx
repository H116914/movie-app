import React, { useState } from "react"
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css"
import Menu from "./Menu";

const Header = (props:any) =>{
    const [darkMode, setDarkMode] = useState(true); 

    const handleLooks = (mode:boolean, listView:boolean) => {
        setDarkMode(mode);
        props.onChangeLooks(mode,listView);
    }
    const handleSearch = (search:string, type:string, numPages:number) => {
        props.onSubmit(search, type, numPages);
    }
    const handleSortByGenre = (genre:string) =>{
        props.onSortByGenre(genre);
    }

    return(
        <section className="header">
            <section className="header">
                <section>
                    <Menu onSubmit={(darkMode:boolean, listView:boolean)=>handleLooks(darkMode,listView)}/>
                </section>
                <section>
                    <Navbar darkMode={darkMode} onSortByGenre ={(genre:string)=> handleSortByGenre(genre)}/>
                </section>
                <section>
                    <Search darkMode={darkMode} onSubmit={(search:string, type:string, numPages:number)=> handleSearch(search, type, numPages, )}/>
                </section>
            </section>
        </section>
    )
}

export default Header;