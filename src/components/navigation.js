import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const navigation = () => {
    return (
        <nav>
            <div className='nav-bar-button'>
                <Link to="/music">
                    Music
                </Link>
            </div>
            <div className='nav-bar-button'>
                <Link to="art">
                    Art
                </Link>
            </div>
            <div className='nav-bar-button'>
                <Link to="poetry">
                    Poetry
                </Link>
            </div>
        </nav>
    )
}

export default navigation;