import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
    <nav class="bg-[#FFF023] border border-black border-2 px-2 sm:px-4 py-2.5 z-50 dark:bg-gray-900 fixed w-full top-0 left-0">
        <div class="container mt-[9px] mb-[9px] flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" class="flex items-center">
                <span class="ml-[29px] self-center text-xl font-bold whitespace-nowrap dark:text-white">BaomaDev</span>
            </Link>

        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex items-stretch">
                    <li>
                        <Link to='/skills' class="self-center text-lg font-bold whitespace-nowrap mr-[15px] dark:text-white" aria-current="page">Skills</Link>
                    </li>
                    <li>
                        <Link to='/achievements' class="self-center text-lg font-bold whitespace-nowrap mr-[15px] dark:text-white" aria-current="page">Achievements</Link>
                    </li>
                    <li>
                        <Link to='/projects' class="self-center text-lg font-bold whitespace-nowrap mr-[29px] dark:text-white" aria-current="page">My Works</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;