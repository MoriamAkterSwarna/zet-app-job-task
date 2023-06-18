import Image from 'next/image';
import productBg1 from '../../../public/decImg.svg'
import productBg2 from '../../../public/decImg2.svg'
import ProductCards from './productCard';


const Products = () => {
    return (
        <div className="bg-blue-50 mt-4 h-[100%] lg:h-[90vh]">
            <div className='relative'>
            <Image  src={productBg1} alt='product background'></Image>
            <div className='text-center mt-4 absolute top-10 ml-[40%] mb-8'>
            <h2 className='text-2xl font-semibold'>Products on ZET</h2>

            <p>We are trusted by best brand in the country</p>
            </div>
           <div className='absolute bottom-0 right-0'>
           <Image src={productBg2} alt='Product background2'></Image>
           </div>
           <div className='absolute top-32'>
           <ProductCards ></ProductCards>
           </div>
            </div>

            
        </div>
    );
};

export default Products;