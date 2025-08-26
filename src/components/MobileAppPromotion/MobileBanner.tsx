import { useEffect, useState } from "react"
import { FaStar, FaXmark } from "react-icons/fa6"
import logoMobile from '@/assets/logo_modile_app.svg'

const MobileBanner = () => {
    const [showMobileApp,setShowMobileApp] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowMobileApp(true)
        }, 4000);
    },[])
  return (
    <>
        {
            showMobileApp && (
                <div className="w-full h-32 fixed bottom-0 left-0 z-10 bg-white flex items-center justify-between max-sm:h-24 border-t">
                    <div className="flex flex-col items-start gap-2 px-5 max-sm:px-2">
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="w-10 h-10 flex items-center justify-center border-2 p-2 rounded-md max-sm:w-9 max-sm:h-9">
                                <img src={logoMobile} alt="Mobile_app_logo" />
                            </div>
                            <div className="flex flex-col ">
                                <p className="font-bold flex items-center gap-3 max-sm:text-sm">ASOS <FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/></p>
                                <span>Avilable in the play store</span>
                            </div>
                        </div>
                       <div className="flex items-center gap-5 max-sm:gap-2">
                        <button className="bg-slate-100 inter px-8 py-2 rounded-md max-sm:px-4 whitespace-nowrap max-sm:py-1 max-sm:text-sm max-sm:rounded-md">VIEW IN APP</button>
                        <button className="bg-green-700 inter px-8 py-2 rounded-md tex-white max-sm:px-4 whitespace-nowrap border max-sm:py-1 max-sm:text-sm hover:bg-white hover:border hover:border-green-500 hover:text-green-500 max-sm:rounded-md">GET APP</button>
                       </div>
                    </div>
                    <button className="px-5" onClick={() => setShowMobileApp(false)}><FaXmark className="text-3xl max-sm:text-xl"/></button>
                </div>
            )
        }
    </>
  )
}

export default MobileBanner