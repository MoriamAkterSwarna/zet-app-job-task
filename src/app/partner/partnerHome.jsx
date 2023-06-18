import Image from 'next/image';
import partnerBg from '../../../public/partnerImage/PartnerWithUsImage.webp'
import partner1 from '../../../public/partnerImage/PartnerBrands.webp'
import partner2 from '../../../public/partnerImage/PincodesServed.webp'
import partner3 from '../../../public/partnerImage/FinancialAdvicers.webp'

const PartnerHome = () => {
    return (
        <div className='choose'>
            
            <Image className='py-10' src={partnerBg} alt='Partner with us'></Image>

            <div className='my-6'>
                <h2 className='text-2xl font-bold mb-3'>Partner with us</h2>
                <p> Join us in our journey of expanding the distribution of financial products & services to all corners of India. We will help you increase your visibility in tier 2, 3 & 4 cities and towns of India and get quality customers at a fraction of the cost.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10'>
                <Image src={partner1} alt='Partner Brands'></Image>
                <Image src={partner2} alt='Partner Brands'></Image>
                <Image src={partner3} alt='Partner Brands'></Image>
            </div>
        </div>
    );
};

export default PartnerHome;