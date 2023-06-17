"use client";
import Image from "next/image";
import playStoreLogo from "../../../public/downloadBtnDark.a0f01343.svg"
import bannerImg from '../../../public/HeroImgNew.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" className="flex sm:w-[90%] lg:w-[80%] sm:h-[270px] lg:h-[370px] bg-blue-50 my-32 mx-auto sm:justify-center lg:justify-around items-center rounded-sm">
            <div>
                <h1 className="text-4xl font-bold">Become a Financial Advisor and <br></br> <span className="text-blue-600">Earn Rs. 1 Lakh/Month</span></h1>
                <p className="my-3">No investment required</p>
                <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank"> <Image className="w-28" src={playStoreLogo} alt="Play Store Logo"></Image> </a>
            </div>
            <div className="hidden lg:block">
                <Image className="w-[26vw] -mt-24 mb-4" src={bannerImg}></Image>
            </div>
        </div>
        


    );
};

export default Banner;