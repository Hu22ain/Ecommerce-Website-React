import React from "react";
import Product from "../components/products";
import Products from '../productsdata'
import Pagination from "../components/pagination";
import NewArrival from '../Arrivaldata'
import NewsLetter from '../components/newsletter'
import Footer from "../components/footer";
import Banner from "../components/Banner";
import BannerData from "../BannerData";

export default function Shop(){
    const products =Products.map(item => {
        return (
              <Product
                  key={item.id}
                  {...item}
              
              />
        )
      
       })
       const newArrival = NewArrival.map(item => {
        return(
          <Product
             key={item.id}
             {...item}
          />
        )
       })
    return(
        <>
        <Banner
        key ={BannerData[0].key}
        id ={BannerData[0].id}
        title ={BannerData[0].title}
        subtitle ={BannerData[0].subTitle}
        />
        <div className='pro'>
         <div id="featured-products">
           {products}
           {newArrival}
        </div>
        </div>
        <Pagination/>
        <NewsLetter/>
        <Footer/>
         
        </>
    )
}