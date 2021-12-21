import React from "react";
import { Link, useLocation } from "react-router-dom";
import './displayImage.css';

const DisplayImage = () => {

    const location = useLocation();
    const imgPath = location.state.imgPath

    return(
        <div className={'display-flex-root'}>
            {console.log(imgPath)}
            <div className={'display-img-container'}>
                <img alt="err" src={imgPath}></img>
                <Link to='/art'>Back</Link>
            </div>
        </div>
    )
}

export default DisplayImage;