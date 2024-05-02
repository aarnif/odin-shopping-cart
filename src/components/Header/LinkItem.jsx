import { Link } from "react-router-dom";

const LinkItem = ({ to, itemName, shoppingCartItemCount }) => {
  return (
    <li>
      <Link to={to}>{itemName}</Link>
      {shoppingCartItemCount > 0 && (
        <span className="ml-2">{shoppingCartItemCount}</span>
      )}
    </li>
  );
};

export default LinkItem;
