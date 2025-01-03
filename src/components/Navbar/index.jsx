import { FaGithub } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Link from 'next/link';

const Navbar = ({ isBlurred, toggle, setToggle }) => {
    return (
        <nav className={`fixed top-0 w-full flex justify-between items-center  px-6 xl:px-32 py-6 ${isBlurred ? "bg-black bg-opacity-[50%] backdrop-blur-sm" : ""} transition-all duration-300 z-20`}>
            <ul className={`flex  items-center sm:space-x-8  `}>
                <li>
                    <Link href="#" scroll={true} >
                        <span className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out text-2xl font-bold sm:pr-7">muHarris</span>
                    </Link>
                </li>
                <li>
                    <Link href="#about" scroll={true} className="hidden sm:block">
                        <span className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out">About</span>
                    </Link>
                </li>
                <li>
                    <Link href="#projects" scroll={true} className="hidden sm:block">
                        <span className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out">Projects</span>
                    </Link>
                </li>
                <li>
                    <Link href="#contact" scroll={true} className="hidden sm:block">
                        <span className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out">Contact</span>
                    </Link>
                </li>
            </ul>
            <LuMenu className="size-8 sm:hidden cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => setToggle(!toggle)} />
            <Link href={"https://github.com/muharriss"} className="hidden sm:block">
                <FaGithub className="size-7 cursor-pointer hover:-translate-y-1 transition-all duration-300  " />
            </Link>
        </nav>
    );
};

export default Navbar;
