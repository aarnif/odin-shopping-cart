import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className="max-w-[400px] h-[280px] flex-grow flex flex-col justify-start items-center text-lg">
      <ul className="w-full flex flex-col justify-start items-start">
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Fantasy Art</p>
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
          <ul
            id="social-media-icons"
            className="flex justify-center items-center"
          >
            <li className="group h-12 w-12 mr-2 flex justify-center items-center rounded-full cursor-pointer transition hover:bg-slate-700 active:scale-95">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="w-full h-full flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fill-current text-white transition group-hover:text-slate-900"
                  size={"2xl"}
                />
              </a>
            </li>
            <li className="group h-12 w-12 mr-2 flex justify-center items-center rounded-full cursor-pointer transition hover:bg-slate-700 active:scale-95">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="w-full h-full flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fill-current text-white transition group-hover:text-slate-900"
                  size={"2xl"}
                />
              </a>
            </li>
            <li className="group h-12 w-12 mr-2 flex justify-center items-center rounded-full cursor-pointer transition hover:bg-slate-700 active:scale-95">
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="w-full h-full flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fill-current text-white transition group-hover:text-slate-900"
                  size={"2xl"}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
