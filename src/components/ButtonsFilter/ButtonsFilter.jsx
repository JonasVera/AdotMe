import React, { useState } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import ArrowUp from "../../assets/icons/ArrowUp.svg";
import ArrowDown from "../../assets/icons/ArrowDown.svg";

import "./styles.css";

export default function ButtonsFilter() {
  const [buttonsTop] = useState(["Gatos", "Cachorros", "Outros Pets"]);
  const [buttonsBottom, setbuttonsBottom] = useState({
    filters: [
      { name: "Raça", arrow: ArrowDown, subButtons: [] },
      { name: "Idade", arrow: ArrowDown, subButtons: [] },
      { name: "Localização", arrow: ArrowDown, subButtons: [] },
    ],
  });

  const handleSubButtonsFilters = (indexButton) => {
    const newStateButtons = {
      filters: buttonsBottom.filters.map((item, index) => {
        if (index === indexButton && item.arrow === ArrowDown) {
          item.arrow = ArrowUp;
        } else if (index === indexButton && item.arrow === ArrowUp) {
          item.arrow = ArrowDown;
        }

        return item;
      }),
    };

    setbuttonsBottom(newStateButtons);
  };

  return (
    <div className="buttons-filter">
      <div className="list-buttons-top-filter">
        {buttonsTop.map((item, index) => {
          return (
            <button key={index} className="item-buttons-top-filter">
              {item}
            </button>
          );
        })}
      </div>
      <ul className="list-buttons-bottom-filter">
        {buttonsBottom.filters.map((item, index) => {
          if (index !== 2) {
            return (
              <li
                key={index}
                className="item-buttons-bottom-filter"
                onClick={() => handleSubButtonsFilters(index)}
              >
                <span>{item.name}</span>
                <img src={item.arrow} alt="Seta" />
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className={`${"item-" + index + "-buttons-bottom-filter"}`}
                onClick={() => handleSubButtonsFilters(index)}
              >
                <span>{item.name}</span>

                <img src={item.arrow} alt="Seta" />
                <ButtonSearch />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
