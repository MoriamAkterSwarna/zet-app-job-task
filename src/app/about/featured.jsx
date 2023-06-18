import Image from 'next/image';
import feature1 from '../../../public/aboutPage/features/BusinessStandard.webp'
import feature2 from '../../../public/aboutPage/features/EconomicTimes.webp'
import feature3 from '../../../public/aboutPage/features/Inc42.webp'
import feature4 from '../../../public/aboutPage/features/YourStory.webp'
import feature5 from '../../../public/aboutPage/features/mint.webp'

const Featured = () => {
    return (
        <div className='my-10 sm:w-[90%] lg:w-[80%] mx-auto '>
            <h2 className='text-5xl font-bold mb-10'>Got Featured</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                <div>
                    <Image className='w-52' src={feature1} alt='Business Standard'></Image>
                </div>
                <div>
                    <Image className='w-52' src={feature2} alt='Economic times'></Image>
                </div>
                <div>
                    <Image className='w-52' src={feature3} alt='Inc42'></Image>
                </div>
                <div>
                    <Image className='w-52' src={feature4} alt='Your story'></Image>
                </div>
                <div>
                    <Image className='w-52' src={feature5} alt='Mint'></Image>
                </div>
            </div>
        </div>
    );
};

export default Featured;