import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className="max-w-[400px] h-[280px] flex-grow flex flex-col justify-start items-center">
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
            <li className="h-12 w-12 flex justify-start items-center rounded-full active:scale-95">
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "black" }}
                  size={"xl"}
                />
              </a>
            </li>
            <li className="h-12 w-12 flex justify-start items-center rounded-full active:scale-95">
              <a href="https://www.instagram.com" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                  size={"xl"}
                />
              </a>
            </li>
            <li className="h-12 w-12 flex justify-start items-center rounded-full active:scale-95">
              <a href="https://www.twitter.com" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "black" }}
                  size={"xl"}
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
