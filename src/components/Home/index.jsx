"use client"

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../Navbar/SideBar";
// import Loader from "./Loader";

const Home = () => {

    const [isBlurred, setIsBlurred] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [toggle, setToggle] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const handleScroll = () => {
            // Deteksi scroll lebih dari 50px, misalnya
            if (window.scrollY > 50) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        handleScroll();

        setInitialized(true);

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener saat komponen unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [toggle]);


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000); // Durasi loading 2 detik
    //     return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
    // }, []);


    useEffect(() => {
        const fixLayout = () => {
            window.scrollTo(0, 1); // Scroll sedikit ke bawah
            window.scrollTo(0, 0); // Kembali ke atas
        };

        fixLayout();

        const timeout = setTimeout(fixLayout, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="h-[100vh] flex justify-center items-center ">
            <p className="">testing4 cuy</p>
            {/* {isLoading ? <Loader/> : null} */}
            {/* <Navbar isBlurred={isBlurred} toggle={toggle} setToggle={setToggle} />
            <SideBar toggle={toggle} setToggle={setToggle} />
            <div className={`fixed h-screen w-full -z-10 bg-[url('/bg.webp')] bg-cover bg-center`} >
                <div className={`h-full flex flex-col justify-center items-center  `}>
                    <p className="text-7xl sm:text-8xl md:text-[8rem] xl:text-[10rem] text-nowrap text-center">harris</p>
                    <p className="text-3xl text-center text-nowrap">Frontend Developer</p>
                </div>
            </div>
            <div className={`fixed h-screen w-full -z-10 ${!initialized ? "backdrop-blur-md bg-black bg-opacity-[82%] " : ""}  ${isBlurred ? "backdrop-blur-md bg-black bg-opacity-[82%]  " : ""}  transition-all duration-300`} /> */}
        </div>
    )
}

export default Home

// ${isBlurred ? "backdrop-blur-md bg-black bg-opacity-[82%]  " : ""}

// ${isBlurred ? 'backdrop-blur-sm transition-all  bg-black bg-opacity-[82%] duration-300 ' : "backdrop-blur-0"}