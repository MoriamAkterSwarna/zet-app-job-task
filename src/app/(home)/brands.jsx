import Image from "next/image";
import Marquee from "react-fast-marquee";

import brand1 from '../../../public/brands/Amex.webp'
import brand2 from '../../../public/brands/Aufin.webp'
import brand3 from '../../../public/brands/Axis.webp'
import brand4 from '../../../public/brands/Bajaj.webp'
import brand5 from '../../../public/brands/BOB.webp'
import brand6 from '../../../public/brands/Icici.webp'
import brand7 from '../../../public/brands/Idfc.webp'
import brand8 from '../../../public/brands/IndusInd.webp'
import brand9 from '../../../public/brands/StandardChartered.webp'
import brand10 from '../../../public/brands/YesBank.webp'
const TopBrands = () => {
  return (
    <div className="sm:w-[90%] lg:w-[80%] mx-auto">
      <div className="text-center">
      <h2 className="mt-20 text-2xl font-semibold mb-2">Top Brands on ZET</h2>
      <p>We are trusted by best brand in the country</p>
      </div>
<Marquee className="mt-10"> 
        <Image src={brand1} alt="Amex" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand2} alt="Aufin" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand3} alt="Axis" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand4} alt="Bajaj" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand5} alt="BOB" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand6} alt="Icici" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand7} alt="Idfc" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand8} alt="IndusInd" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand9} alt="StandardChartered" className="w-[200px] border rounded-md mx-3"></Image>
        <Image src={brand10} alt="YesBank" className="w-[200px] border rounded-md mx-3"></Image>
      

      </Marquee>
      
    </div>
  );
};

export default TopBrands;
