import "./styles.css";
import MyContext from "./my_context";
import { useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [info, setInfo] = useState([]);
  const sharedState = { info, setInfo }


  let apiUrlPage1 = 'https://api.pexels.com/v1/curated?page=2&per_page=40';

  useEffect(() => {
    consultarInformacion(apiUrlPage1);
  }, []);

  const consultarInformacion = async (urlApi) => {
    const miHeaders = new Headers()
    miHeaders.append("Authorization", "563492ad6f91700001000001c7ac164cecd24fed967e9cc9fd135d6f")

    if (urlApi != null) {
      const response = await fetch(urlApi, {headers: miHeaders})
      const data = await response.json()
      setInfo(data.photos);
      console.log(info,"infokjdksj")
    }
  }


  return (
    <div className="App">

      <MyContext.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>


    </div>
  );
}
