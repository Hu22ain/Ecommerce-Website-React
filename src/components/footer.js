import React from "react";

export default function Footer(){
    return(
        <div>
            <section id="footer">
                <div className="cara">
            <img src="./img/logo.png" alt="logo"></img>
            <div className="contact">
            
                <h4>Contact</h4>
                <ul>
                    <li><p><span>Address: </span>567 Wellington Road, Street 32, New York</p></li>
                    <li><p><span>Phone: </span>+12345678767/(+91)2345677892</p></li>
                    <li><p><span>Hours: </span>10:00-18:00, Mon-Sat</p></li>
                </ul>
            </div>
            <div className="socials">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-pinterest-p"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
                </div>
                <div className="about">
            <h4>About</h4>
            <ul>
                <a href="">
                    <li><p>About Us</p></li>
                </a>
                <a href="">
                    <li><p>Delivery Information</p></li>
                </a>
                <a href="">
                    <li><p>Privacy Policy</p></li>
                </a>
                <a href="">
                    <li><p>Terms & Condition</p></li>
                </a>
                <a href="">
                    <li><p>Contact Us</p></li>
                </a>
            </ul>
                </div>
            
                <div className="myAccount">
            <h4>My Account</h4>
            <ul>
                <a href="">
                    <li><p>Sign In</p></li>
                </a>
                <a href="">
                    <li><p>View Cart</p></li>
                </a>
                <a href="">
                    <li><p>My Wallet</p></li>
                </a>
                <a href="">
                    <li><p>Track My Order</p></li>
                </a>
                <a href="">
                    <li><p>Help</p></li>
                </a>
            </ul>
                </div>
                <div className="installApp">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="install">
                <a href=""><img src="./img/pay/app.jpg" alt="img"></img></a>
                <a href=""><img src="./img/pay/play.jpg" alt="img"></img></a>
            </div>
            <p>Secured Payment Gateways</p>
            <a href=""><img src="./img/pay/pay.png" alt="img"></img></a>
            
                </div>
                
            </section>  
                <div className="copyright">
            <p>@2021 Tech2etc - HTML CSS Ecommerce Templates</p>
                </div>
        </div>

    );
}