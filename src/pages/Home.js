import React, {useState} from "react";


export default function (props) {

  return (
    <div className = "homepage_wrapper">
        <div className = "homepage_navbar navbar navbar-expand-lg">
            <nav>
                <ul>
                    <li><p id="logo">TL;DR</p></li>
                    <li><a href="#">DARK/LIGHT</a></li>
                    <li><a href="#">ADD</a></li>
                    <li><a href="#">PFP/SETTINGS</a></li>
                </ul>
            </nav>
        </div>  
    </div>
  )
}
