import axios from "axios";
import { useEffect, createContext, useState, useContext  } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [theme, setTheme] = useState("light");
  const [favs, setFavs] = useState(lsFavs);
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";


  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);
  
  return (
    <ContextGlobal.Provider value={{theme, setTheme, favs, setFavs, dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
