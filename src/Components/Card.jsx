import React from "react";
import PropTypes from "prop-types";


const Card = ({ id, name, username }) => {

  const addFav = ()=>{
      // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFav = { id, name, username };

    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert("Added to favorites!");
    } else {
      alert("This dentist is already in favorites");
    }
  }

  return (
    
    <div className="card">
       {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h2>{name}</h2>
      <p>{username}</p>
      <button onClick={addFav}>Add fav</button>
    </div>
  );
  
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};


export default Card;
