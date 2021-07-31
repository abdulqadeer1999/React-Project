import React, { useState } from 'react'
import "./style.css"
import Menu from "../menuApi"
import MenuCard from "./MenuCard"

export const Restaurant = () => {

   const [menuData,setMenuData] = useState(Menu)


    return (
        <div>
            <MenuCard /> 
        </div>
    )
}
