import React from "react";
import MainBanner from "./home/mainBanner";
import Category from "./home/category";
import AboutUs from "./home/aboutUs";
import Footer from "./home/footer";

const Home =()=>
{
    return(
        <>
        <MainBanner/>
        <Category/>
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default Home;