import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  console.log(id);

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Detail Dentist id: {dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;
