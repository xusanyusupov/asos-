import carhatt from '@/assets/collections/carhartt.png'
import freedPerry from '@/assets/collections/freed-perry.png'
import newBalance from '@/assets/collections/new_balanse.png'
import ov3 from '@/assets/collections/on_v3.png'
import polo from '@/assets/collections/polo.png'
import allSaintV from '@/assets/collections/all-saintsv2.png'

const images = [ov3,polo,newBalance,carhatt,allSaintV,freedPerry]

const Brands = () => {
  return (
    <>
      <button className='mx-auto block mt-10 px-4 py-2 rounded-md border-2 border-white text-white font-bold bg-black transition duration-300 hover:bg-white hover:text-black hover:border-2 hover:border-black'>
        Show More
      </button>
      <div className="container mt-10 max-sm:w-full">
        <div className="grid grid-cols-6 items-center max-lg:grid-cols-6 max-sm:grid-cols-2">
          {
            images.map((el) => {
              return <img key={el} src={el} alt="Brand logos" className='rounded-md object-contain duration-300 hover:bg-white hover:scale-105 hover:duration-300 hover:shadow-[2px_0px_15px_10px_rgba(0,_0,_0,_0.1)]'/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Brands