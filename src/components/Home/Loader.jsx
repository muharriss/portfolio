const Loader = () => {
    return (
        <div className="fixed flex justify-center items-center  overflow-hidden w-full h-screen -z-10 " >
            <div className={`w-12 h-12 border-4 border-t-black border-r-transparent rounded-full animate-spin `} />
            <div className="fixed w-full h-screen bg-black bg-opacity-[82%] "/>
        </div>
    )
}

export default Loader