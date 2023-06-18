import Image from 'next/image';
import evolutionImg from '../../../public/aboutPage/Growth.webp'

const EvolutionPage = () => {
    return (
        <div className='text-center my-10'>
            <h2 className='text-5xl font-bold'>How we evolved over the years</h2>
            <div className='sm:w-[90%] lg:w-[80%] mx-auto  mt-10'>
            <Image src={evolutionImg} alt='Growth' className='w-full '></Image>
            </div>
        </div>
    );
};

export default EvolutionPage;