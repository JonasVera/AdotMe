import React from "react";
import CardAnimal from "../Cards";
import "./styles.css";

export default function GridAnimais({ dados }) {
  return (
    <div className="cards-content">
      {dados.map((item, index) => {
        return <CardAnimal key={index} dadosPet={item} />;
      })}
    </div>
  );
}
