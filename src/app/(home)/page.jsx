import Banner from "./banner";
import TopBrands from "./brands";
import ChooseZet from "./choose";
import ZETEffect from "./effect";
import Products from "./products";


const HomePage = () => {
    return (
        <div>
           <Banner></Banner> 
           <TopBrands></TopBrands>
           <Products></Products>
           <ZETEffect></ZETEffect>
           <ChooseZet></ChooseZet>
        </div>
    );
};

export default HomePage;