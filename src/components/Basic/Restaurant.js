import React, { useState } from 'react'
import "./style.css"
import Menu from "../menuApi"

export const Restaurant = () => {

   const [menuData,setMenuData] = useState()


    return (
        <div>
            <div className="card-container">
            <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">1</span>
                  <span className="card-author subtle">BreakFast</span>
                  <h2 className="card-title">Maggi</h2>
                  <span className="card-description subtle">
                      ueu FJF FNIWFNWVBM DIWDIQDNQFNWK  Z VZVKB JUJFUFU FJUFUFU
                  </span>
                  <div className="card-read">READ</div>

                </div>
                

            </div>
            </div>
        </div>
    )
}
