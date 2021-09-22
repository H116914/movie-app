import React, { Fragment, useState } from "react";
import menuImg from "../img/menu.png"
import listImg from "../img/List.png"
import tileImg from "../img/Tile.png"
import "./Menu.css"

const Menu = (props:any) => {

    const [darkMode, setDrakMode] = useState<string>("1")
    const [listView, setListView] = useState<string>("0")
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    
    const handleDarkMode = (e:any) => {
        setDrakMode(e.target.value);
        handleSubmit(e,null);
    }

    const HandleView = (e:any) => {
        setListView(e.target.value);
        handleSubmit(null, e);
    }

    const handleSubmit = (mode:any, View:any) => {
        mode!==null?
            props.onSubmit(mode.target.value == "1", listView=="1")
            :props.onSubmit(darkMode == "1", View.target.value=="1")
    }
    
    return(
        <React.Fragment>
                <img onClick = {()=>setMenuOpen(!menuOpen)} src={menuImg} alt="menu" width = "30" height ="30"/>
                {menuOpen?
                    <ul>
                        <li onClick={(e)=>handleDarkMode(e)} value="1">Dark mode</li>
                        <li onClick={(e)=>handleDarkMode(e)} value="0">Light mode</li>
                        <li onClick={(e)=>HandleView(e)} value="0"> Tiles <img src={tileImg} alt="sda" width = "20" height ="20"/></li>
                        <li onClick={(e)=>HandleView(e)} value="1"> List  <img src={listImg} alt="" width = "20" height ="20"/></li>
                    </ul>
                :null}  
        </React.Fragment>
    )
}

export default Menu