import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const Project = () => {
    return (
        <div className="flex justify-center pt-32 px-6" id="projects">
            <div className=" max-w-5xl  overflow-hidden w-full">
                <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-black pb-14">Projects</p>
                <div className="space-y-8 ">
                    <div className="relative aspect-square bg-gray-800 max-h-[576px] w-full  rounded-xl overflow-hidden flex items-center  justify-end" >
                        <img src="tes.png" alt="image" className="aspect-video object-cover w-[100%] md:w-[70%] mr-0 md:mr-14  rounded-md shadow-lg shadow-black" />
                        <img src="tes-m.png" alt="image" className="absolute bottom-0 right-0 shadow-lg shadow-black rounded-md  md:m-5 w-[30%] md:w-[20%]" />
                        <div className="absolute top-0 h-full w-full  bg-transparent bg-gradient-to-r from-neutral-950/80" />
                        <div className="absolute left-5 sm:left-14 top-5 sm:top-10  flex gap-6 ">
                            <FaGithub className="size-7 cursor-pointer hover:-translate-y-1 transition-all duration-300  " />
                            <IoLink className="size-8 cursor-pointer hover:-translate-y-1 transition-all duration-300  " />
                        </div>
                        <div className="absolute left-5 sm:left-14 bottom-0 sm:bottom-auto space-y-5 sm:h-[90%] h-[80%] w-full flex flex-col justify-start sm:justify-center overflow-hidden ">
                            <p className="text-4xl font-bold text-[2rem] sm:text-[3rem] ">AnimeList</p>
                            <div className="max-w-[60%] relative ">
                                <p className="font-bold text-neutral-400 text-xs truncate xs:text-wrap ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="font-bold text-neutral-400 mt-2 text-base " style={{ "wordSpacing": "0.5rem" }}>Nextjs Tailwindcss JikanAPI</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="aspect-square max-h-[576px] w-full bg-gray-800 rounded-xl" />
                    <div className="aspect-square max-h-[576px] w-full bg-gray-800 rounded-xl" /> */}
                </div>
            </div>
        </div>
    )
}

export default Project