import React from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useContextGlobal();



  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Favs;
