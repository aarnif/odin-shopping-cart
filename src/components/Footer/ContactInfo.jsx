import SocialMediaLinks from "../SocialMediaLinks";

const ContactInfo = ({ isFooter }) => {
  return (
    <div className="max-w-[400px] h-[280px] flex-grow flex flex-col justify-start items-center text-lg">
      <ul className="w-full flex flex-col justify-start items-start">
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Landscape Art</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">235 Bowery</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">New York, NY 10002</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">United States</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">(212) FAKE-PHONE-NUMBER</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">fake.address@fantasy-art.com</p>
        </li>
        <li className="w-full flex justify-start items-center">
          <SocialMediaLinks isFooter={isFooter} />
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
