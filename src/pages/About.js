import React from "react";
import Featuresdata from "../featuresdata";
import Features from "../components/features";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import MobileApp from '../components/mobileApp' 
import Banner from "../components/Banner";
import BannerData from "../BannerData";

export default function About(){
    const features = Featuresdata.map(item =>{
        return(
          <Features
              key={item.key}
              {...item}
          />
        )})
    

      return(
        <>
        <Banner
         key={BannerData[2].key}
         id = {BannerData[2].id}
         title ={BannerData[2].title}
         subtitle ={BannerData[2].subTitle}

        />
         
         <section id="aboutContainer">
        <div class="aboutImg">
               <img src="./img/about/a6.jpg" alt=""></img>
        </div>
        <div class="aboutText">
            <h1>Who We Are?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi reprehenderit sequi nam saepe quibusdam ab eum accusamus maxime. Error eum modi reiciendis maxime placeat hic nihil magnam, quos deleniti repudiandae!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius inventore non ipsam nostrum perferendis! Non enim porro id aliquam ipsam, velit molestiae minima totam, dolore, minus amet earum similique illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vitae quidem eligendi nisi laborum corrupti, laboriosam quam libero recusandae hic ab dolor culpa. Perspiciatis esse quam architecto odit odio magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique odit illum id fugiat nihil suscipit, quisquam omnis amet officiis modi quo dignissimos vitae inventore esse dolorum nam adipisci autem!</p>
            <p><u>Create stunning images with as much or as little control as you like thanks to a chioce of basic and creative modes</u></p>
            <marquee width="100%" loop
        ="-1" scrollamount="5"  >Create stunning images with as much or as little control as you like thanks to a chioce of basic and creative modes</marquee>
 
        </div>
    </section>
        <MobileApp/>
        <div id="features">{features}</div>
        <Newsletter/>
        <Footer/>
        </>
    )}
   
