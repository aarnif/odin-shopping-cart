import Signature from "../Signature";
import ContactInfo from "./ContactInfo";
import OpeningHours from "./OpeningHours";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center pt-12 pb-4 bg-slate-900 text-white">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[1600px] flex-grow flex justify-around items-start">
            <ContactInfo isFooter={true} />
            <OpeningHours />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Signature />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
