import Image from "next/image";
import playStoreLogo from "../../../public/downloadBtnDark.a0f01343.svg"
import bannerImg from '../../../public/HeroImgNew.webp'

const Banner = () => {
    return (
        <div className="flex w-[80%] bg-blue-50 my-32 mx-auto justify-around items-center rounded-sm">
            <div>
                <h1 className="text-4xl font-bold">Become a Financial Advisor and <br></br> <span className="text-blue-600">Earn Rs. 1 Lakh/Month</span></h1>
                <p className="my-3">No investment required</p>
                <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank"> <Image className="w-28" src={playStoreLogo} alt="Play Store Logo"></Image> </a>
            </div>
            <div>
                <Image className="w-[26vw] -mt-16 mb-4" src={bannerImg}></Image>
            </div>
        </div>
    );
};

export default Banner;