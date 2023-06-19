"use client";
import VideoPlayer from '@/utils/videoPlayer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar ,Autoplay} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import Image from 'next/image';
import playstoreLogo from '../../../public/downloadBtnDark.a0f01343.svg'

const EarningSteps = () => {
    return (
        // <div className='rectangle bg-blue-950 relative h-[700px]'>
        //     <div className='absolute left-0 top-0 w-1/2'>
        //     <Swiper 
        //       slidesPerView={1}
        //       modules={[Navigation,  Scrollbar,Autoplay]}
            
        //       autoplay
        //       loop
        //       scrollbar={{ draggable: true
        //      }}
              
        //     >
        //       <SwiperSlide className="mb-10">
        //         <p className="text-2xl font-bold">We helped customers in more than 50 cities to get their first financial product</p>

        //       </SwiperSlide>
        //       <SwiperSlide className="mb-10">
        //         <p className="text-2xl font-bold">14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p>
        //       </SwiperSlide>
        //       <SwiperSlide className="mb-10"><p className="text-2xl font-bold">14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p></SwiperSlide>
              
        //     </Swiper>
        //     </div>
        //     <div className='absolute right-0 top-0 w-1/2'>
        //     <VideoPlayer></VideoPlayer>
        //     </div>
        // </div>

        <div className='rectangle bg-blue-950 relative h-[700px] text-white'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Start Earning in 3 Easy Steps</h2>
                <p>We have create the app the make your earning easy</p>
            </div>
  <div className='absolute left-20 top-52 w-1/3'>
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Scrollbar, Autoplay]}
      autoplay
      loop
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="mb-10">
        <p className=' bg-blue-500 btn border-none mb-3'>STEP 1</p>
        <p className="text-2xl font-bold">Start earning upto ₹ 1 Lakh every month</p>
        <Image className='w-32 mt-4' src={playstoreLogo} alt='Play store'></Image>
      </SwiperSlide>
      <SwiperSlide className="mb-10">
      <p className=' bg-blue-500 btn border-none mb-3'>STEP 2</p>
        <p className="text-2xl font-bold">Register your customers and Recommend financial products</p>
        <Image className='w-32 mt-4' src={playstoreLogo} alt='Play store'></Image>
      </SwiperSlide>
      <SwiperSlide className="mb-10">
      <p className=' bg-blue-500 btn border-none mb-3'>STEP 3</p>
        <p className="text-2xl font-bold">Download the App and Sign up as a ZET agent</p>
        <Image className='w-32 mt-4' src={playstoreLogo} alt='Play store'></Image>
      </SwiperSlide>
    </Swiper>
  </div>
  <div className='absolute right-20 top-24'>
    <VideoPlayer></VideoPlayer>
  </div>
</div>

    );
};

export default EarningSteps;