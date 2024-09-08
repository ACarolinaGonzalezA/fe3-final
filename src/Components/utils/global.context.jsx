import { useEffect, createContext, useMemo, useState } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState("light");
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);


  const value = useMemo(() => ({
    theme,
    setTheme,
    dentists
  }), [theme, dentists]);


  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
