import hero from '@/assets/hero/hp_mw_hero_wk49-50_2880x1280_row.jpg'
import mobileImg from '@/assets/collections/suit.jpg'
const Hero = () => {
    const windowWidth = window.innerWidth
  return (
    <>
        <div className="bg-black">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-5 py-5">
                    <p className="text-3xl text-white inter text-center max-xs:text-xl">End of Summer Sale</p>
                    <p className="text-5xl text-white inter text-center max-xs:text-4xl">Further reductions: now up to 70% off</p>
                    <div className="flex items-center">
                        <button className='px-4 py-2 rounded-md border-2 border-white text-white font-bold bg-black transition duration-300 hover:bg-white hover:text-black'>
                            View all Sale !
                        </button>
                    </div>
                    <p className="text-white inter text-center max-xs:text-xs">Valid on selected Sale items only. While stocks last. See website banner for full Ts&Cs.</p>
                </div>
            </div>
            <img className={`w-full ${windowWidth < 650 ? 'h-[700px]' : ''} ${windowWidth < 400 ? 'h-[500px]' : ''} object-cover `} src={windowWidth < 650 ? mobileImg : hero} alt="Hero image" />
        </div>
    </>
  )
}

export default Hero