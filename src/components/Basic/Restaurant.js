import React, { useState } from 'react'
import "./style.css"
import Menu from "../menuApi"
import MenuCard from "./MenuCard"
import { Navbar  } from './Navbar'

const uniqueList = [ ...new Set (Menu.map((curElem) => {
      return curElem.category
})
),
"All",
]

console.log(uniqueList)

export const Restaurant = () => {

   const [menuData,setMenuData] = useState(Menu)
   const [menuList ,setMenuList] = useState(uniqueList)

   const filterItem = (category) => {
     if(category === "All") {
       setMenuData(Menu)
       return;
     }
            const updateList = Menu.filter((curElem) => {
              return curElem.category.toLocaleLowerCase() === category;
            });

            setMenuData(updateList)
   }


    return (
        <div>
           <Navbar filterItem = {filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} /> 
     
        </div>
    )
}
