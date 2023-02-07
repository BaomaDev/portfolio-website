import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

const LayoutHome = (props) => {
    return(
        <>
        <Navigation/>
        <Hero/>
        {props.children}
        <Footer/>
        </>
    )
}

export default LayoutHome;