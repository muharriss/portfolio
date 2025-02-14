"use client"

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../Navbar/SideBar";
import { motion } from "motion/react"
import Loader from "./Loader";

const Home = () => {

    const [isBlurred, setIsBlurred] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [toggle, setToggle] = useState(false)
    const [hScreen, setHscreen] = useState(false)//to fix broken layout for mobile screen

    useEffect(() => {

        const handleScroll = () => {
            // Deteksi scroll lebih dari 50px,
            if (window.scrollY > 50) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }

            //to fix broken layout for mobile screen
            if (window.scrollY > 900) {
                setHscreen(true);
            }
        };

        handleScroll();

        // setInitialized(true);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div >
            {!initialized && <Loader />}
            <Navbar isBlurred={isBlurred} toggle={toggle} setToggle={setToggle} />
            <SideBar toggle={toggle} setToggle={setToggle} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                }}
                className={`fixed ${hScreen ? "h-screen" : "h-[800px]"} sm:h-screen w-full -z-10 bg-[url('/bg.webp')] bg-cover bg-center`}
            >
                <div className={`h-full flex flex-col justify-center items-center  `}>
                    <p className="text-7xl sm:text-8xl md:text-[8rem] xl:text-[10rem] text-nowrap text-center">harris</p>
                    <p className="text-3xl text-center text-nowrap">Frontend Developer</p>
                </div>
            </motion.div>
            <div className={`fixed h-screen w-full -z-10 ${!initialized ? "backdrop-blur-md bg-black bg-opacity-[82%] " : ""}  ${isBlurred ? "backdrop-blur-md bg-black bg-opacity-[82%]  " : ""}  transition-all duration-300`} />
        </div>
    )
}

export default Home