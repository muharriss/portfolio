import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma, SiMysql, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const About = () => {
    return (
        <div className=" flex justify-center pt-32 px-6" id="about">
            <div className="max-w-5xl overflow-hidden w-full">
                <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-black mb-14">About me</p>
                <div className="flex flex-col gap-6 md:flex-row  justify-center items-center ">
                    <div className=" w-[100%] flex justify-center md:min-w-[300px] ">
                        <img src={"profile.jpg"} alt="profile" className=" aspect-square object-cover w-[300px] contrast-150 grayscale hover:sepia rounded-3xl transition-all ease-in-out duration-300" />
                    </div>
                    <div className=" space-y-2 mt-14 md:mt-0 md:max-w-[550px] ">
                        <p className="text-4xl leading-normal">Hi, I'm Haris. <br className="md:hidden" />A Frontend Developer. </p>
                        <p className="text-xl text-justify leading-8">I specialize in building dynamic and interactive web applications using Next.js. I enjoy creating user-friendly and efficient digital experiences. I love film, music, and anime.</p>
                    </div>
                </div>
                <div className="mt-32 flex flex-col items-center space-y-7 ">
                    <p className="text-4xl text-center">Tech Stack That I Use</p>
                    <div className=" grid grid-cols-4 justify-items-center w-full ">
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <RiNextjsFill className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">NextJS</p>
                        </div>
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <FaReact className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">ReactJS</p>
                        </div>
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <IoLogoJavascript className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">Javascript</p>
                        </div>
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <RiTailwindCssFill className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">Tailwind</p>
                        </div>

                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <SiPrisma className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">Prisma</p>
                        </div>
                        <div className=" flex flex-col  justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <SiMysql className="aspect-square max-w-[70px] w-full h-[70px] " />
                        </div>
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <BiLogoPostgresql className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">Postgres</p>
                        </div>
                        <div className=" flex flex-col gap-2 justify-center items-center aspect-square max-w-[112px] w-full h-full  rounded-xl m-0 p-0 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            <SiMongodb className="aspect-square max-w-[52px] w-full h-[52px]" />
                            <p className=" bottom-2 left-7 font-bold text-xs sm:text-base">MongoDB</p>
                        </div>



                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About