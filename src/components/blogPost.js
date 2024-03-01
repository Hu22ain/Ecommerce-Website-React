import React from "react";

export default function BlogPost(props){
    return(
        <section id="blog-post">
        <div class="blog-box">
            <div class="blogImg">
                <img src={props.image} alt=""></img>
            </div>
            <div class="blogText">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a href="">CONTINUE READING</a>

            </div>
            <div class="date">
                <h1>{props.date}</h1>
            </div>
        </div>
    </section>
    )
} 