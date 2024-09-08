
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <ContextProvider>
       <Navbar />
      <Routes className="App">
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs/>}/>
          {/* <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>} /> */}
          
          
          
      </Routes>
      <Footer />
      </ContextProvider>
  );
}

export default App;
