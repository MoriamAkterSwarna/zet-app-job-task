import founder1 from '../../../public/aboutPage/founderImg/Manish.webp'
import founder2 from '../../../public/aboutPage/founderImg/Yash.webp'
import founder3 from '../../../public/aboutPage/founderImg/Lokesh.webp'
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
const Founders = () => {
    return (
        <div className='my-10 sm:w-[90%] lg:w-[80%] mx-auto'>
            <h2 className='text-5xl font-bold mb-4 text-center'>Meet our Founders</h2>
            <p className='text-xl text-center mb-6'>Few words from founders desk</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
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
    );
};

export default Founders;