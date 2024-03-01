import React from "react";

export default function Newsletter(){
    return(<section id="news-letter">
    <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span className="s-offer">special offers</span></p>
    </div>
    <div className="form">
        <input type="text" placeholder="Your email address"></input>
        <button>Sign up</button>

    </div>
</section>);
}