import Image from 'next/image';
import othersbg from '../../../public/aboutPage/AboutUsFooter.webp'

const Others = () => {
    return (
        <div>
            <Image src={othersbg} alt='About Us Footer'></Image>
        </div>
    );
};

export default Others;