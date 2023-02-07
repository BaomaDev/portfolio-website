import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import gitlab from "../assets/gitlab.png";


const Cards = () => {
    return(
    <div className="grid grid-cols-3 gap-4">

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={html} alt="HTML icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">HTML</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg bg-white" src={css} alt="CSS icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">CSS</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg bg-white" src={javascript} alt="JavaScript icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">JavaScript</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg bg-white" src={react} alt="ReactJS icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">ReactJS</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg bg-white" src={tailwind} alt="Tailwind icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">Tailwind CSS</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>

        <div class="border border-4 border-black w-full max-w-sm bg-[#FFF023] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div class="flex flex-col items-center pb-[20px] pt-[20px]">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={gitlab} alt="Gitlab icon"/>
            <p class="mt-[4px] text-xl font-medium text-[#000000] dark:text-white">Gitlab</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="border border-2 border-black inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#000000] bg-[#FAFF66] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
            </div>
        </div>
        
        </div>
    </div>
    
    )
}

export default Cards;