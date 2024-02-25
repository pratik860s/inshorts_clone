import React from 'react';
import './NavInshorts.css';
import {SwipeableTemporaryDrawer} from "./HamburgerDrawer";

const Navinshorts = ({setCategory}) => {
  return (
    <div className="nav">
        <div className="icon">
            <SwipeableTemporaryDrawer setCategory={setCategory}/>
        </div>
        <img style={{cursor:"pointer"}} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height="80%" alt="logo"/>
    </div>
  )
}

export default Navinshorts