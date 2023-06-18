"use client";
import Image from "next/image";
import people from "../../../public/peeps1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar ,Autoplay} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
const ZETEffect = () => {
  return (
    <div className=" bg-blue-500 rectangle mt-96 lg:my-10 ">
      <div className="w-[90%] py-36 px-32 mx-auto">
        <div className="bg-blue-400 rectangle relative">
          <div className="my-20">
          <Image  className="h-full object-cover" src={people} alt="People"></Image>
          </div>
          <div className="absolute  right-0 top-48 w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-8">THE ZET EFFECT</h2>
          <Swiper 
              slidesPerView={1}
              modules={[Navigation,  Scrollbar,Autoplay]}
            
              autoplay
              loop
              scrollbar={{ draggable: true
             }}
              
            >
              <SwiperSlide className="mb-10">
                <p className="text-2xl font-bold">We helped customers in more than 50 cities to get their first financial product</p>

              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <p className="text-2xl font-bold">14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p>
              </SwiperSlide>
              <SwiperSlide className="mb-10"><p className="text-2xl font-bold">14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p></SwiperSlide>
              
            </Swiper>
            
          </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default ZETEffect;
