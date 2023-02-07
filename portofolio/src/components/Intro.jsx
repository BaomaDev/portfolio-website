import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Wajah from "../assets/introphoto.jpeg";
import AboutMe from "./AboutMe";

const Intro = () => {
    return(
        <>
        <div className="bg-[#FFFFFF] dark:bg-[#000000] flex flex-wrap items-center justify-between mx-auto">
            <div className="ml-[70px] underline underline-offset-1 max-w-xl selection:bg-[#F7FF00]">
                <a className="font-serif text-2xl font-light text-[#000000] dark:text-[#FFFFFF]">
                    Hallo, Saya Jesse! Saya merupakan
                </a>
                    <span className="text-[#000000] dark:text-[#FFFFFF]">
                    <TypeWriterEffect
                    textStyle={{
                    fontFamily: 'Red Hat Display',
                    fontWeight: 500,
                    fontSize: '2em',
                    }}
                    cursorColor="#3F3D56"
                    multiText={[
                    "Web Developer",
                    "Designer",
                    "Photographer",
                    "Gym Enthusiast"
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                    multiTextLoop
                    />
                    </span>
            </div>

            <div>
                <img src={Wajah} class="max-w-[300px] h-auto rounded-full mr-[70px] drop-shadow-2xl" alt=""/>
            </div>
        </div>
        
        <div className="mt-[120px]">
            <AboutMe/>
        </div>
        </>
    )
}

export default Intro