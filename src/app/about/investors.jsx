import Image from 'next/image';
import inv1 from '../../../public/aboutPage/investorsImg/Inv1.webp'
import inv2 from '../../../public/aboutPage/investorsImg/Inv2.webp'
import inv3 from '../../../public/aboutPage/investorsImg/Inv3.webp'
import inv4 from '../../../public/aboutPage/investorsImg/Inv4.webp'
import inv5 from '../../../public/aboutPage/investorsImg/Inv5.webp'
import inv6 from '../../../public/aboutPage/investorsImg/Inv6.webp'
import inv7 from '../../../public/aboutPage/investorsImg/Inv7.webp'
import inv8 from '../../../public/aboutPage/investorsImg/Inv8.webp'

const Investors = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 my-10 sm:w-[90%] lg:w-[80%] mx-auto gap-10'>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv1} alt='investor'></Image>
                <h4 className='font-bold'>Kunal Shah</h4>
                <p className='text-gray-400'>Founder, CRED</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv2} alt='investor'></Image>
                <h4 className='font-bold'>Gaurav Munjal</h4>
                <p className='text-gray-400'>Founder, UNACADEMY</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv3} alt='investor'></Image>
                <h4 className='font-bold'>Aakrit Vaish</h4>
                <p className='text-gray-400'>Co-Founder, HAPTIK</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv4} alt='investor'></Image>
                <h4 className='font-bold'>Harshil Mathur</h4>
                <p className='text-gray-400'>Founder, RAZORPAY</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv5} alt='investor'></Image>
                <h4 className='font-bold'>Vidit Aatrey</h4>
                <p className='text-gray-400'>Founder & CEO, MEESHO</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv6} alt='investor'></Image>
                <h4 className='font-bold'>Amrish Rau</h4>
                <p className='text-gray-400'>CEO, PINELABS</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv7} alt='investor'></Image>
                <h4 className='font-bold'>Lalit Keshre</h4>
                <p className='text-gray-400'>CEO, GROWW</p>
            </div>
            <div className='hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:duration-300'>
                <Image className='w-44' src={inv8} alt='investor'></Image>
                <h4 className='font-bold'>Gokul Rajaram</h4>
                <p className='text-gray-400'>Product, DOORDASH</p>
            </div>
        </div>
    );
};

export default Investors;