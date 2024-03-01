import React from "react";
export default function Banner(Props){
    return(
        <section id={Props.id}>
        <h2>{Props.title}</h2>
        <p>{Props.subtitle}</p>
    </section>
    )
}