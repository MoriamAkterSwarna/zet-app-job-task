import AboutBanner from "./aboutBanner";
import EvolutionPage from "./evolution";
import Featured from "./featured";
import Founders from "./founder";
import InvestorCompanies from "./investorCompanies";
import Investors from "./investors";
import Others from "./others";

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
            <Others></Others>
        </div>
    );
};

export default aboutPage;