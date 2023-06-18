import AboutBanner from "./aboutBanner";
import EvolutionPage from "./evolution";

export const metadata = {
    title: "ZET - About Us",
  };

const aboutPage = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <EvolutionPage></EvolutionPage>
        </div>
    );
};

export default aboutPage;