import Hero from "../Hero";
import dataService from "../../services/dataService";
import ArtGrid from "./ArtGrid";
import { useState, useEffect } from "react";

const Art = () => {
  const [art, setArt] = useState([]);
  let content = null;

  useEffect(() => {
    dataService.getAll().then((data) => {
      console.log(data);
      setArt(data);
    });
  }, []);

  if (!art.length) {
    content = <div>Loading...</div>;
  } else {
    content = <ArtGrid art={art} />;
  }

  return (
    <>
      <Hero />
      <div className="w-full flex-grow max-w-[1600px] my-24 flex flex-col">
        {content}
      </div>
    </>
  );
};

export default Art;
