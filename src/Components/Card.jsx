import React from "react";
import doctorImage from "/images/doctor.jpg";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ id, name, username }) => {
  const {setFavs} = useContextGlobal();
  
  // const addFav = () => {
  //   // Aqui iria la logica para agregar la Card en el localStorage
  //   const favs = JSON.parse(localStorage.getItem("favs")) || [];
  //   const newFav = { id, name, username };

  //   if (!favs.some((fav) => fav.id === id)) {
  //     favs.push(newFav);
  //     localStorage.setItem("favs", JSON.stringify(favs));
  //     alert("Added to favorites!");
  //   } else {
  //     alert("This dentist is already in favorites");
  //   }
  // };
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentist = { id, name, username };
    setFavs((favs) => [...favs, dentist]);
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src={doctorImage} alt={`Doctor ${name}`} />
      <Link to={'/detail/' + id}>
      <h2>{name}</h2>
      </Link>
      <p>{username}</p>
      <p>{id}</p>
      <button onClick={addFav}>🌟Agregar a favoritos🌟</button>
    </div>
  );
};

export default Card;
