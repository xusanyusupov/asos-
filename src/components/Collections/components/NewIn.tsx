import Denim from '@/assets/collections/Denim.jpg'
import Just_landed_sneakers from '@/assets/collections/Just_landed_sneakers.jpg'
import The_latest_drop from '@/assets/collections/The_latest_drop.jpg'
import Trending_bags from '@/assets/collections/Trending_bags.jpg'
import New_drop from '@/assets/collections/new drop.jpg'
import Coats from '@/assets/collections/suit.jpg'


const newin = [
  {
    title: "Just landed sneakers",
    img: Just_landed_sneakers
  },
  {
    title: 'Denim',
    img: Denim,
  },
  {
    title:'The latest drop',
    img: The_latest_drop,
  },
  {
    title: 'Trending bag',
    img: Trending_bags,
  },
  {
    title: 'New Drop',
    img: New_drop,
  },
  {
    title: 'Coats',
    img: Coats,
  }
]


const NewIn = () => {
   
  
  return (
    <>
      <p className='font-bold text-5xl text-center py-8 inter max-lg:text-4xl'>New In</p>
      <div className="grid grid-cols-6 w-full gap-0 max-md:grid-cols-2">
        {newin.map((el) => (
          <div key={el.title} className="relative w-full h-96 max-xl:h-80 max-lg:h-72 max-md:h-60 max-xs:h-52">
            <img
              src={el.img}
              className="border w-full h-full object-cover max-xl:object-center "
              alt={el.title}
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end py-1 justify-center">
              <span className="text-white text-lg inter font-bold">
                {el.title}
              </span>
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default NewIn