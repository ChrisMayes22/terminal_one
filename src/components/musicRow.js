import React from "react";
import './musicRow.css';
import { IoIosPlayCircle } from "react-icons/io";

const musicRow = ({title, playable}) => {
    return(
        <div className="music-row-flex">
            {playable 
            ? 
            <div className="music-row-icon">
                <IoIosPlayCircle/>
            </div>
            : 
            null
            }
            <div className="music-row-content">
                {title}
            </div>
        </div>
    )
}

export default musicRow;