import React, { useState } from 'react';
import './info.css';
import { MdLock, MdAssignmentInd } from "react-icons/md";
import iconSobre from "./Chat.svg";




const Info = () => {
    return <>
        <div className="container-sobre">
            <div className="image-sobre">
                <img src={iconSobre}></img>
            </div>
            <div className="descricao-sobre">
                 <h1>Conheça nossa empresa!</h1>  
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Mauris feugiat feugiat vulputate. 
                     orbi dui felis, egestas eget 
                     velit quis, eleifend volutpat
                      neque.</p> 
                 <button>SAIBA MAIS</button>                    
            </div>
        </div>
    </>
}

export default Info;