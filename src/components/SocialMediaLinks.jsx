import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = ({ isFooter }) => {
  const classStyles = isFooter
    ? "fill-current text-white transition group-hover:text-slate-900"
    : "fill-current text-slate-900 transition group-hover:text-white";
  return (
    <ul id="social-media-icons" className="flex justify-center items-center">
      <li className="group h-12 w-12 mr-2 flex justify-center items-center rounded-full cursor-pointer transition hover:bg-slate-700 active:scale-95">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="w-full h-full flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={classStyles}
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
            className={classStyles}
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
            className={classStyles}
            size={"2xl"}
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
