'use client'

import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SideBar = ({ toggle, setToggle }) => {

    return (
        <div className={`fixed max-w-5xl w-screen h-screen bg-transparent flex z-10  ${toggle ? "block" : "hidden"} ` }>

            <div className="relative p-6 w-1/2 h-screen bg-white dark:bg-black ">
                <button onClick={() => setToggle(!toggle)} className="float-right text-xl hover:scale-[120%]  rounded transition-all duration-300 px-1">X</button>
                <div className="flex flex-col pt-6 space-y-4 text-xl ">
                    <Link href="#about" onClick={() => setToggle(!toggle)} className="hover:text-[#1e88e5] transition-all duration-300 ease-in-out ">About</Link>
                    <Link href="#projects" onClick={() => setToggle(!toggle)} className="hover:text-[#1e88e5] transition-all duration-300 ease-in-out">Projects</Link>
                    <Link href="#contact" onClick={() => setToggle(!toggle)} className="hover:text-[#1e88e5] transition-all duration-300 ease-in-out">Contact</Link>
                </div>
                <div className="gap-3 flex justify-center  absolute right-0 bottom-10 w-full">
                    <MdEmail className="cursor-pointer size-10 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                    <FaGithub className=" cursor-pointer size-10 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                    <FaInstagram className="cursor-pointer size-10  p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                </div>
            </div>
            <div onClick={() => setToggle(!toggle)} className="w-1/2 h-screen cursor-pointer" />

        </div>
    )
}

export default SideBar
