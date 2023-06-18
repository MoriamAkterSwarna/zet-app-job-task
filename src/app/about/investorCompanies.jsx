"use client";
import Image from 'next/image';
import invCompany1 from '../../../public/aboutPage/investorCompany/InvCompany1.webp'
import invCompany2 from '../../../public/aboutPage/investorCompany/InvCompany2.webp'
import invCompany3 from '../../../public/aboutPage/investorCompany/InvCompany3.webp'
import invCompany4 from '../../../public/aboutPage/investorCompany/InvCompany4.webp'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const InvestorCompanies = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='my-10 sm:w-[90%] lg:w-[80%] mx-auto'> 
            <h2 className='text-5xl font-bold mb-10'>Meet the Investors</h2>
            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                <Image className='w-48' src={invCompany1} alt='Investor company'></Image>
                <Image className='w-48' src={invCompany2} alt='Investor company'></Image>
                <Image className='w-48' src={invCompany3} alt='Investor company'></Image>
                <Image className='w-48' src={invCompany4} alt='Investor company'></Image>
            </div>
        </div>
    );
};

export default InvestorCompanies;