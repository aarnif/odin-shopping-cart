import { Link } from "react-router-dom";

const LinkItem = ({ to, itemName, handleChangeHeroImage }) => {
  return (
    <li>
      <Link to={to} className="hover:underline" onClick={handleChangeHeroImage}>
        {itemName}
      </Link>
    </li>
  );
};

export default LinkItem;
