import React, { useState, useEffect } from "react";
import CardsList from "../../components/CardsList";
import Header from "../../components/Header/";
import api from "../../Service/service";

export default function Home() {
  const [dadosCards, setDadosCards] = useState([]);

  async function getAnimais() {
    const request = await api.get(`animal/animaisAdocao`);
    setDadosCards(request.data.content);
  }

  useEffect(() => {
    getAnimais();
  }, []);

  if (dadosCards !== null) {
    return (
      <div className="main">
        <Header />
        <CardsList dados={dadosCards} />
      </div>
    );
  } else {
    return (
      <div className="main">
        <Header />
        {<span></span>}
      </div>
    );
  }
}
