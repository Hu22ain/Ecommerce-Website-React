import React from "react";

export default function Features(props){
    return(

       
        <div className="feature"> <img src={props.image} alt="img"></img>
            <p>{props.text}</p>
        </div>
    
       
    );
}