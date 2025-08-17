import img1 from "@/assets/collections/swiper/img1.jpg";
import img2 from "@/assets/collections/swiper/img2.jpg";
import img3 from "@/assets/collections/swiper/img3.jpg";
import img4 from "@/assets/collections/swiper/img4.jpg";
import img5 from "@/assets/collections/swiper/img5.jpg";
import img6 from "@/assets/collections/swiper/img6.jpg";
import img7 from "@/assets/collections/swiper/img7.jpg";
import img8 from "@/assets/collections/swiper/img8.jpg";
import img9 from "@/assets/collections/swiper/img9.jpg";
import img10 from "@/assets/collections/swiper/img10.jpg";
import img11 from "@/assets/collections/swiper/img11.jpg";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "@/components/Collections/components/SeasonClothe.css"
 

const slides = [
    [
      { img: img2, name: "adidas Originals Tokyo trainers in white and red", oldPrice: 134.22, newPrice: 107.38 },
      { img: img9, name: "Puma Polermo Leather trainers in white and black", oldPrice: 124.75, newPrice: 119.22 },
      { img: img1, name: "Vans Old Skool trainers in triple black", oldPrice: 126.33, newPrice: 75.01 },
      { img: img11, name: "New Balance 327 trainers in off white and burgundy", oldPrice: null, newPrice: 184.0 },
    ],
    [
      { img: img3, name: "Puma Arizona trainers in white and black", oldPrice: 150.01, newPrice: 112.91 },
      { img: img6, name: "Asics Skyhand Og trainers in marzipan and dried leaf green", oldPrice: null, newPrice: 166.0 },
      { img: img7, name: "Asics Skyhand Og trainers in marzipan and dried leaf green", oldPrice: null, newPrice: 166.0 },
      { img: img4, name: "New balance 9060 trainers is off white and green", oldPrice: null, newPrice: 179.0 },
    ],
    [
      { img: img8, name: "adidas Originals SL 72 RS trainers in brown and cream", oldPrice: null, newPrice: 143.0 },
      { img: img11, name: "adidas Originals SL 72 RS trainers in brown and cream", oldPrice: null, newPrice: 143.0 },
      { img: img5, name: "adidas Originals Samba OG trainers in cow print - exclusive to ASOS", oldPrice: null, newPrice: 174.0 },
      { img: img10, name: "adidas Originals Samba OG trainers in light pink", oldPrice: null, newPrice: 151.0 },
    ],
  ];
  
  

const SeasonClothes = () => {
  const windowWidth = window.innerWidth
  console.log(windowWidth);
  
    function insertBreakAfter8Words(text: string) {
        const words = text.split(" ");
        if (words.length > 8) {
          return (
            <>
              {words.slice(0, 8).join(" ")}
              <br />
              {words.slice(8).join(" ")}
            </>
          );
        }
        return text;
      }
      
  return (
   <>
   <p className="inter text-5xl font-bold text-center py-5">Sneakers of the season</p>
   <div className="flex items-center justify-center">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((group, i) => (
          <SwiperSlide key={i} style={{ width: "100%", padding: "0 50px" }}>
            <div className="flex items-start justify-center">
              {group.map((product, idx) => (
                <div key={idx} className="flex flex-col w-[430px] h-[550px]">
                  <img src={product.img} className= {`object-contain`} alt={product.name} />
                  <span className="font-extralight inter">{insertBreakAfter8Words(product.name)}</span>
                  <div>
                    {product.oldPrice && (
                      <s className="font-medium text-navigateBg">${product.oldPrice}</s>
                    )}{" "}
                    <span className={`${product.oldPrice ? 'text-muted' : 'text-navigateBg'} font-bold`}>${product.newPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </>
  );
};

export default SeasonClothes;
