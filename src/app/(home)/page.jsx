import Banner from "./banner";
import TopBrands from "./brands";
import ChooseZet from "./choose";
import EarningSteps from "./earning";
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
           <EarningSteps></EarningSteps>
        </div>
    );
};

export default HomePage;