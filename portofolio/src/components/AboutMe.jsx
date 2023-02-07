import React from "react";

const AboutMe = () => {
    return(
        <div className="w-full h-auto border border-2 border-black">
            <div className="mr-[35px] ml-[35px] mt-[20px] mb-[20px] selection:bg-[#F7FF00]">
                <a className="text-bold font-serif text-2xl font-light text-[#000000] dark:text-[#FFFFFF]">More about me :</a>
                
                <div className="font-serif text-base font-light text-[#000000] dark:text-[#FFFFFF] mt-[8px] text-justify">
                    <p>
                        Hi! Perkenalkan namaku Jesse Robinson Junior Simanjuntak, aku biasa dipanggil dengan panggilan Jesse.
                        Aku merupakan mahasiswa Teknik Informatika semester 2 yang berkuliah di kampus tercinta, Institut Teknologi Sepuluh Nopember {"(ITS)"}.
                        Aku memfokuskan diriku ke bidang Front End web development dan kini masih terus belajar dan berkembang.
                    </p>
                    <br/>
                    <p>
                        Aku merupakan individu yang suka mencoba hal baru dan menganalisa sekitarku.
                        Oleh karena itu, meskipun aku merupakan seorang introvert, aku tetap dapat memaksakan diriku untuk bekerja bersama tim.
                        Hal tersebut membuatku menjadi diriku yang dapat belajar hal baru dan dapat memandang segala hal dalam perspektif yang luas :D.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe