import React from "react";
 
export default function Form(){
    return(
        <section class="contactForm">
        <div class="form2">
            <span>LEAVE A MESSAGE</span>
            <h1>We love to hear from you</h1>
            <input type="text" placeholder="Your Name"></input>
            <input type="email" placeholder="E-mail" ></input>
            <input type="text" placeholder="Subject"></input>
            <textarea name="Your Message"cols="20" rows="7" placeholder="Your Message"></textarea>
        <button>Submit</button>    
    </div>
        <div class="persons">
            <div class="person">
                <div class="personImg">
                    <img src="./img/people/1.png" alt=""></img>
                </div>
                <div class="personText">
                    <h3>John Doe</h3>
                    <p>Senior Marketing Manager</p>
                    <p>Phone: +1234567 756 56</p>
                    <p>E-mail:contact@example.com</p>
                </div>

            </div>
          <div class="person">
                <div class="personImg">
                    <img src="./img/people/2.png" alt=""></img>
                </div>
                <div class="personText">
                    <h3>John Doe</h3>
                    <p>Senior Marketing Manager</p>
                    <p>Phone: +1234567 756 56</p>
                    <p>E-mail:contact@example.com</p>
                </div>
                </div>
                <div class="person">
                    <div class="personImg">
                        <img src="./img/people/3.png" alt=""></img>
                    </div>
                    <div class="personText">
                        <h3>John Doe</h3>
                        <p>Senior Marketing Manager</p>
                        <p>Phone: +1234567 756 56</p>
                        <p>E-mail:contact@example.com</p>
                    </div>
                    </div>
    </div>
            
            
    </section>
    )
}