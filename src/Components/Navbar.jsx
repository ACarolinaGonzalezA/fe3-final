import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useContext(ContextGlobal);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <nav className={theme === "light" ? "light-nav" : "dark-nav"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar