import React from "react";
import "./styles.css";
import Search from "../../assets/icons/Search.svg";

export default function ButtonSearch() {
  return (
    <button className="button-search">
      <img src={Search} width="30px" alt="Seta" />
      <span>Me encontre</span>
    </button>
  );
}
