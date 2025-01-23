import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const ProjectCard = ({ title, desc, desc2, tech, imgDesktop, imgMobile, linkGithub, linkWebsite, shadow = true, imgOther }) => {
    return (
        <div className="relative aspect-[1/2]  bg-gray-800 max-h-[576px] w-full  rounded-xl overflow-hidden flex items-end sm:items-center justify-end" >
            <img src={imgDesktop} alt="image" className={`aspect-video  object-cover w-[100%] md:w-[70%] mr-0 md:mr-14  rounded-md mb-[25%] sm:mb-0 ${shadow ? "shadow-lg shadow-black" : "shadow-none"} `} />
            {imgMobile ? (
                <img src={imgMobile} alt="image" className={`absolute bottom-0 right-0   rounded-md  md:m-5 md:w-[20%] w-[30%]  ${shadow ? "shadow-lg shadow-black" : "shadow-none"} `} />
            ) : (
                <img src={imgOther} alt="image" className={`absolute bottom-0 right-0   rounded-md  md:m-5 md:w-[40%] w-[60%] `} />
            )}

            <div className="absolute top-0 h-full w-full  bg-transparent bg-gradient-to-r from-neutral-950/80" />
            <div className="absolute left-5 sm:left-14 top-5 sm:top-10  flex gap-6 ">
                <Link href={linkGithub} className="z-10">
                    <FaGithub className="size-7 cursor-pointer hover:-translate-y-1 transition-all duration-300  " />
                </Link>
                {linkWebsite && (
                    <Link href={linkWebsite} className="z-10">
                        <IoLink className="size-8 cursor-pointer hover:-translate-y-1 transition-all duration-300  " />
                    </Link>
                )}
            </div>
            <div className="absolute  sm:top-1/2 left-5 sm:left-14 sm:transform sm:-translate-y-1/2 sm:h-auto h-[87%]  space-y-5 ">
                <p className="text-4xl sm:text-nowrap font-bold text-[2rem] sm:text-[3rem] sm:max-w-[60%]  ">{title}</p>
                <div className="max-w-[90%] sm:max-w-[60%] ">
                    <p className="font-bold text-neutral-400 text-xs  xs:text-wrap ">{desc} <span className="hidden sm:inline">{desc2}</span></p>
                    <p className="font-bold text-neutral-400 mt-2 text-base " style={{ "wordSpacing": "0.5rem" }}>{tech}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard