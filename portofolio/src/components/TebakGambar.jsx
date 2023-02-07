import React from "react";
import { useState } from "react";
import Timeline from "./Timeline";

const TebakGambar = () => {
    const [show, setShow] = useState(true);

    return(
        <>
        <div className="mt-[24px] m-auto selection:bg-[#F7FF00]">
            {show && <div className="flex"><Timeline/></div>}

            <div className="flex">
                <div className="mt-[20px] font-bold bg-[#FFF023] h-auto w-[450px] m-auto border border-4 border-black rounded-full text-center font-serif" onClick={() => setShow(!show)}>
                    {show === true ? "Still striving for more!!! (Click again to hide)" : "Click to see my achievements"}
                </div>
            </div>
        </div>
        </>
    )
}

export default TebakGambar;