import React from "react";
import Cards from "./Cards";

const AboutPengalaman = () => {
    return(
        <div>
        <div className="mt-[80px] mr-[35px] ml-[35px] selection:bg-[#F7FF00]">
            <a className="font-serif text-2xl font-light text-[#000000] dark:text-[#FFFFFF]">
                Tentang Pengalamanku
            </a> <hr className="border-1 border-[#000000]"/>
        </div>

        <div className="mt-[20px] mb-[20px] selection:bg-[#F7FF00]">
            <div className="font-serif text-base font-light text-[#000000] dark:text-[#FFFFFF] mt-[8px] text-justify">
                <div className="mb-[20px] w-full text-center">
                    <a className="font-bold underline underline-offset-1">
                        Aku berpengalaman dengan beberapa perangkat seperti :
                    </a>
                </div>

                <div className="ml-[35px] mr-[30px]">
                    <Cards/>
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default AboutPengalaman