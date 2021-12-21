import React from "react";
import { Link } from "react-router-dom";
import './navButton.css'

const navButton = ({content, path}) => {
    return(
        <Link to={path}>
            <button className={'nav-button'}>
                {content}
            </button>
        </Link>
        
    )
}

export default navButton;