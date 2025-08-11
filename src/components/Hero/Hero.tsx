
const Hero = () => {
  return (
    <>
        <div className="bg-black">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-5 py-5">
                    <p className="text-3xl text-white inter text-center max-xs:text-xl">End of Summer Sale</p>
                    <p className="text-5xl text-white inter text-center max-xs:text-4xl">Further reductions: now up to 70% off</p>
                    <div className="flex items-center">
                        <button
                    className="relative bottom-0 flex justify-center items-center gap-2 border rounded-md border-white text-[#FFF] font-black bg-[#000] uppercase px-4 py-3 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#000] hover:bg-[#FFF] active:scale-95 active:duration-0 focus:bg-[#FFF] focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
                    >
                    <span className="truncate eaes-in-out duration-300 inter" >View all Sale !</span >
                        </button>
                    </div>
                    <p className="text-white inter text-center max-xs:text-xs">Valid on selected Sale items only. While stocks last. See website banner for full Ts&Cs.</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Hero