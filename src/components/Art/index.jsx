import Hero from "../Hero";
import dataService from "../../services/dataService";
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

  if (!art) {
    content = <div>Loading...</div>;
  } else {
    content = art.map((artPiece) => (
      <div key={artPiece.id} className="flex flex-col items-center">
        <h3>{artPiece.title}</h3>
      </div>
    ));
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
