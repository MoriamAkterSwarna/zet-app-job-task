"use client";
import Image from 'next/image';
import chooseHero from '../../../public/whyUsHero.webp'
import benifit1 from '../../../public/benifits/zero_investment.d5743aab.svg'
import benifit2 from '../../../public/benifits/quick_payout.1d689e09.svg'
import benifit3 from '../../../public/benifits/Fin_products.0e8a0582.svg'
import benifit4 from '../../../public/benifits/Icon_support.c8382fc1.svg'
import benifit5 from '../../../public/benifits/customerSupport.5780cd23.svg'
import benifit6 from '../../../public/benifits/financialProduct.1b3d6eec.svg'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ChooseZet = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='choose sm:w-[90%] lg:w-[80%] mx-auto bg-blue-50 p-10 flex items-center flex-col lg:flex-row'>
            <div className='text-center'>
                <h2 className='text-xl font-bold'>Why <span className='text-blue-600'>Choose Us</span></h2>
                <p>Why we are loved by our customers</p>
                <Image className='mt-8 sm:hidden lg:block' src={chooseHero}></Image>
            </div>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" className='grid grid-cols-3 lg:grid-cols-2 gap-16 mx-10'>
                <div>
                    <Image src={benifit1} alt='Zero Investment'></Image>
                    <h3 className='font-bold'>Zero Investment</h3>
                    <p>Build your business without any investment</p>
                </div>
                <div>
                    <Image src={benifit2} alt='Quick Payout'></Image>
                    <h3 className='font-bold'>Quick Payout</h3>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
                <div>
                    <Image src={benifit3} alt='Limitless Earnings'></Image>
                    <h3 className='font-bold'>Limitless Earnings</h3>
                    <p>Direct Payout in your bank account in short time</p>
                </div>
                <div>
                    <Image src={benifit4} alt='Training & Upskilling'></Image>
                    <h3 className='font-bold'>Training & Upskilling</h3>
                    <p>Get trained by finance and sales experts</p>
                </div>
                <div>
                    <Image src={benifit5} alt='Customer Support'></Image>
                    <h3 className='font-bold'>Customer Support</h3>
                    <p>Access tools and content to build relationship</p>
                </div>
                <div>
                    <Image src={benifit6} alt='Financial Products'></Image>
                    <h3 className='font-bold'>Financial Products</h3>
                    <p>Trustworthy & high-rated products & categories</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseZet;