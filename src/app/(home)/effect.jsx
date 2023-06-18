import Image from 'next/image';
import people from '../../../public/peeps1.webp'
const ZETEffect = () => {
    return (
        
            <div className=' bg-blue-500 rectangle mt-96 lg:my-10 '>

                <div className='bg-blue-400 w-[70%] py-36 px-48 mx-auto'>
                <div className=''>
                    <Image src={people} alt='People'></Image>
                    <div>

                    </div>
                </div>
                </div>
            
            </div>
       
    );
};

export default ZETEffect;