"use client";
import founder1 from '../../../public/aboutPage/founderImg/Manish.webp'
import founder2 from '../../../public/aboutPage/founderImg/Yash.webp'
import founder3 from '../../../public/aboutPage/founderImg/Lokesh.webp'
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Founders = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='bg-blue-50'>
            <div className='mt-10 sm:w-[90%] lg:w-[80%] mx-auto py-10'>
            <h2 className='text-5xl font-bold mb-4 text-center'>Meet our Founders</h2>
            <p className='text-xl text-center mb-6'>Few words from founders desk</p>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div>
                    <Image className='w-72' src={founder1} alt='Manish'></Image>
                    <div  className='flex items-center justify-between'>
                        <div>
                        <h4 className='font-bold'>Manish Shara</h4>
                    <p>Co- Founder & CEO</p>
                        </div>
                        <BsLinkedin className='w-6 h-6 mr-20'></BsLinkedin>
                    </div>
                </div>
                <div>
                    <Image className='w-72' src={founder2} alt='Yash'></Image>
                    <div  className='flex justify-between items-center '>
                        <div>
                        <h4 className='font-bold'>Yash Desai</h4>
                    <p>Co- Founder </p>
                        </div>
                        <BsLinkedin className='w-6 h-6 mr-20'></BsLinkedin>
                    </div>
                </div>
                <div>
                    <Image className='w-72' src={founder3} alt='Lokesh '></Image>
                    <div  className='flex justify-between items-center '>
                        <div>
                        <h4 className='font-bold'>Lokesh Agarwal</h4>
                    <p>CTO</p>
                        </div>
                        <BsLinkedin className='w-6 h-6 mr-20'></BsLinkedin>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Founders;