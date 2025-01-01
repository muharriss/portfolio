const Project = () => {
    return (
        <div className="flex justify-center pt-32 px-6" id="projects">
            <div className=" max-w-5xl  overflow-hidden w-full">
                <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase font-black pb-14">Projects</p>
                <div className="space-y-8 ">
                    <div className="aspect-square max-h-[512px] w-full bg-gray-800 rounded-xl " />
                    <div className="aspect-square max-h-[512px] w-full bg-gray-800 rounded-xl" />
                    <div className="aspect-square max-h-[512px] w-full bg-gray-800 rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default Project