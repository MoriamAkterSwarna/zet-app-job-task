import AboutBanner from "./aboutBanner";
import EvolutionPage from "./evolution";
import Featured from "./featured";
import Founders from "./founder";
import InvestorCompanies from "./investorCompanies";
import Investors from "./investors";

export const metadata = {
    title: "ZET - About Us",
  };

const aboutPage = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <EvolutionPage></EvolutionPage>
            <Featured></Featured>
            <InvestorCompanies></InvestorCompanies>
            <Investors></Investors> 
            <Founders></Founders>
        </div>
    );
};

export default aboutPage;