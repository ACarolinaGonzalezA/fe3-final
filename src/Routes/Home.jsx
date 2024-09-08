import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists, theme } = useContext(ContextGlobal);

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className="card-grid">
         {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card 
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  )
}

export default Home