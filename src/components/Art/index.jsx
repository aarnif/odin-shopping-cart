import LoadingIcon from "../../LoadingIcon";
import ArtGrid from "./ArtGrid";

const Art = ({
  art,
  shoppingCart,
  setShoppingCart,
  setLatestShoppingCartItem,
}) => {
  let content = null;

  if (!art.length) {
    console.log("Loading art data...");
    content = <LoadingIcon />;
  } else {
    content = (
      <ArtGrid
        art={art}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        setLatestShoppingCartItem={setLatestShoppingCartItem}
      />
    );
  }

  return (
    <>
      <div className="w-full flex-grow max-w-[1600px] my-24 px-12 flex flex-col justify-center items-center">
        {content}
      </div>
    </>
  );
};

export default Art;
