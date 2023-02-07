import React from "react";

const SkillBar = () => {
    return( 
    <>
    <div>
        <div className="mb-[20px] mt-[40px] w-full text-center">
            <a className="font-bold underline underline-offset-1">
                Aku juga mempunyai skill lain seperti :
            </a>
        </div>

        <div className="flex">
            <div className="m-auto">
                <div className=" border shadow-lg border-2 border-black rounded w-[1200px] h-auto">
                
                <div class="mt-[18px] ml-[139px] mb-1 text-base font-medium dark:text-white">Bahasa Inggris</div>

                <div className="m-auto w-[920px]">
                    <div class="w-full border shadow-lg bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-gradient-to-r from-[#FFF023] to-[#F7FF00] h-2.5 rounded-full dark:bg-blue-500 w-[90%]"></div>
                    </div>
                </div>

                <div class="mt-[18px] ml-[139px] mb-1 text-base font-medium dark:text-white">Bahasa Mandarin</div>

                <div className="m-auto w-[920px]">
                    <div class="w-full border shadow-lg bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-gradient-to-r from-[#FFF023] to-[#F7FF00] h-2.5 rounded-full dark:bg-blue-500 w-[60%]"></div>
                    </div>
                </div>

                <div class="mt-[18px] ml-[139px] mb-1 text-base font-medium dark:text-white">Bahasa Jepang</div>

                <div className="m-auto w-[920px]">
                    <div class="w-full border shadow-lg bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-gradient-to-r from-[#FFF023] to-[#F7FF00] h-2.5 rounded-full dark:bg-blue-500 w-[40%]"></div>
                    </div>
                </div>

                <div class="mt-[18px] ml-[139px] mb-1 text-base font-medium dark:text-white">Mobile Photography</div>

                <div className="m-auto w-[920px]">
                    <div class="w-full border shadow-lg bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-gradient-to-r from-[#FFF023] to-[#F7FF00] h-2.5 rounded-full dark:bg-blue-500 w-[83%]"></div>
                    </div>
                </div>

                <div class="mt-[18px] ml-[139px] mb-1 text-base font-medium dark:text-white">Design</div>

                <div className="m-auto w-[920px]">
                    <div class="w-full border shadow-lg bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-gradient-to-r from-[#FFF023] to-[#F7FF00] h-2.5 rounded-full dark:bg-blue-500 w-[63%]"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default SkillBar;