import React from "react";
import Intro from "../../components/Intro";
import Achievements from "../achievements/Achievements";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {
    return(
        <>
            <Intro/>
            <Skills/>
            <Achievements/>
            <Projects/>
        </>
    )
}

export default Home