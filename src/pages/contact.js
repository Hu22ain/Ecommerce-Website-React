import React from "react";
import Form from '../components/form'
import Map from '../components/Map'
import Newsletter from "../components/newsletter"
import Footer from '../components/footer'
import Banner from "../components/Banner";
import BannerData from "../BannerData";
export default function Contact(){
    return(
      <>
    <Banner
     key ={BannerData[3].key}
     id = {BannerData[3].id}
     title ={BannerData[3].title}
     subtitle ={BannerData[3].subTitle}
    />
        <Map/>
        <Form/>
        <Newsletter/>
        <Footer/>
        
        </>
    )
}