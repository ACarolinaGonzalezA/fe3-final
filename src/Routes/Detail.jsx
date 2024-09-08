import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error("Error fetching dentist:", error));
  }, [id]);

  return (
    <>
    {dentist ? (
      <>
        <h1>Detail Dentist id: {dentist.id}</h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <p>Name: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </>

    
  )
}

export default Detail