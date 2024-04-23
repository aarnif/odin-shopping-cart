import { Link } from "react-router-dom";

const LinkItem = ({ to, itemName }) => {
  return (
    <li>
      <Link to={to}>{itemName}</Link>
    </li>
  );
};

export default LinkItem;
