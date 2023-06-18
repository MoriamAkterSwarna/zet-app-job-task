"use client";
import Image from 'next/image';
import product1 from '../../../public/products/CC.webp'
import product2 from '../../../public/products/Loan.webp'
import product3 from '../../../public/products/BNPL.webp'
import product4 from '../../../public/products/AccountSave.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProductCards = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" className='sm:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-6 '>
            <div  className='flex items-center justify-around bg-emerald-100/50 rounded-lg p-6 hover:bg-white'>
             <Image className='w-1/4' src={product1} alt='Credit Cards'></Image>
             <div >
                <h3 className='text-xl font-bold uppercase'>Credit Cards</h3>
                <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
             </div>
            </div>
            <div className='flex items-center justify-around bg-orange-50 rounded-lg p-6 hover:bg-white'>
             <Image className='w-1/4' src={product2} alt='Loans'></Image>
             <div >
                <h3 className='text-xl font-bold uppercase'>Loans</h3>
                <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
             </div>
            </div>
            <div className='flex items-center justify-around bg-rose-50 rounded-lg p-6 hover:bg-white'>
             <Image className='w-1/4' src={product3} alt='Shopping cart'></Image>
             <div >
                <h3 className='text-xl font-bold uppercase'>BUY NOW PAY LATER</h3>
                <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
             </div>
            </div>
            <div className='flex items-center justify-around bg-violet-100 rounded-lg p-6 hover:bg-white'>
             <Image className='w-1/4' src={product4} alt='SAVING ACCOUNTS'></Image>
             <div >
                <h3 className='text-xl font-bold uppercase'>SAVING ACCOUNTS</h3>
                <p>ZET offers range of savings account that suits your personal needs for the banking.</p>
             </div>
            </div>
            
        </div>
      
        
      
    );
};

export default ProductCards;