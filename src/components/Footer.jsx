import Image from 'next/image';
import zetLogo from '../../public/zet_logo_white.04e35c15.svg'
import Link from 'next/link';
import { CgMail} from 'react-icons/cg';
import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTelephone, BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
    
    return (
        <div className="footer h-[90vh]">
            <div className='sm:w-[90%] lg:w-[80%] mx-auto py-10 '>
                <div className='border-b-2 border-white w-full pb-4'>
                <Image className='w-20 ' src={zetLogo} alt='logo'></Image>
                </div>
                <div className='text-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20'>
                    <div className='flex flex-col'>
                        <h4 className='text-xl uppercase mb-3 mt-6'>Company</h4>
                        <Link href='/about'>About Us</Link>
                        <Link href='/partner'>Partner with Us</Link>
                        <Link href='/blog'>Blog</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl uppercase mb-3 mt-6'>Legal</h4>
                        <Link href='/'>Privacy Policy</Link>
                        <Link href='/'>Terms of Use</Link>
                        
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl uppercase mb-3 mt-6'>Contact</h4>
                        
                       <a href='/' className='flex items-center'> <CgMail className='w-8 h-6 mb-2'></CgMail> hi@zetapp.in</a>
                       <a href='/' className='flex items-center ml-2'> <BsTelephone ></BsTelephone> +91-7417274072</a>
                        
                        
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl uppercase mb-3 mt-6'>Social</h4>
                        
                       <div className='flex'>
                        <a href=""> <BsLinkedin className='w-6 h-6 mx-2'></BsLinkedin> </a>
                        <a href=""> <BsInstagram className='w-6 h-6 mx-2'></BsInstagram> </a>
                        <a href=""> <BsFacebook className='w-6 h-6 mx-2'></BsFacebook> </a>
                        <a href=""> <BsTelegram className='w-6 h-6 mx-2'></BsTelegram> </a>
                        <a href=""> <BsWhatsapp className='w-6 h-6 mx-2'></BsWhatsapp> </a>
                       </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;