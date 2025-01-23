import Link from "next/link"
import ProjectCard from "./ProjectCard"

const Project = () => {
    return (
        <div className="flex justify-center pt-32 px-6" id="projects">
            <div className=" max-w-5xl  overflow-hidden w-full">
                <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-black pb-14">Projects</p>
                <div className="space-y-8">
                    <ProjectCard
                        title={"AnimeList"}
                        desc={"AnimeList is a website where users can explore anime lists, view details, and manage their collections. It features user authentication and fetches anime data from the Jikan API. Built with Next.js, Tailwind CSS, Prisma, NextAuth, Zod, and PostgreSQL on Vercel."}
                        // desc2={"Built with Next.js, Tailwind CSS, Prisma, NextAuth, Zod, and PostgreSQL on Vercel."}
                        tech={"Nextjs Tailwindcss Prisma PostgreSQL"}
                        imgDesktop={"animelist-desktop.webp"}
                        imgMobile={"animelist-mobile.webp"}
                        linkGithub={"https://github.com/muharriss/animelist"}
                        linkWebsite={"https://youranilist.vercel.app"}
                    />

                    <ProjectCard
                        title={"Tekken Tactic's"}
                        desc={[
                            "Tekken Tactics is a Java-based desktop app for Tekken fans to manage combos, view movesheets, and explore tier lists. Developed by ",
                            <Link
                                href="https://github.com/dammar01"
                                className="text-blue-500"
                                key="dammar">Dammar Syaputra
                            </Link>,
                            ", ",
                            <Link
                                href="https://github.com/muharriss"
                                className="text-blue-500"
                                key="haris">Muhammad Haris
                            </Link>,
                            ", ",
                            <Link
                                href="https://github.com/ImDeshi"
                                className="text-blue-500"
                                key="haikal">Haikal Bagas Putra</Link>,
                            ", and ",
                            <span
                                className="text-blue-500"
                                key="andika">Andika
                            </span>,
                            " for a Visual Programming coursework project."
                        ]}
                        tech={"NetBeans Java Swing MySQL"}
                        imgDesktop={"tekken-desktop.png"}
                        imgOther={"tekken-mobile.png"}
                        linkGithub={"https://github.com/dammar01/Tekken-Tactics"}
                    // linkWebsite={""} 
                    />


                    {/* <div className="aspect-square max-h-[576px] w-full bg-gray-800 rounded-xl" /> */}
                </div>
            </div>
        </div>
    )
}

export default Project