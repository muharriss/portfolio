import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="h-screen flex justify-center  bg px-6 " id="contact">
            <div className="max-w-5xl overflow-hidden w-full">
                <p className="h-[40%] items-center  flex text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-black ">contact</p>
                <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-center">
                    <div className=" space-y-5">
                        <p className="text-5xl text-left font-bold">Stay In Touch</p>
                        <p className="text-xl text-left">Feel free to contact me if you have any questions or just want to say hi.</p>
                        <p className="text-xl font-bold text-left">muhharris04@gamil.com</p>
                    </div>
                    <div className="gap-3 sm:space-y-1 flex sm:flex-col pt-3 sm:pt-0 sm:pl-10">
                        <MdEmail className="cursor-pointer size-10 bg-gray-800 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                        <FaGithub className=" cursor-pointer size-10 bg-gray-800 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                        <FaInstagram className="cursor-pointer size-10 bg-gray-800 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact