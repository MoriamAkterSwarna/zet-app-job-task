import DetailsForm from "./details";
import PartnerHome from "./partnerHome";

export const metadata = {
    title: "ZET - Partner With Us",
  };

const PartnerPage = () => {
    return (
        <div className=" w-[90%] lg:w-[80%] mx-auto">
            <PartnerHome></PartnerHome>
            <DetailsForm></DetailsForm>
        </div>
    );
};

export default PartnerPage;