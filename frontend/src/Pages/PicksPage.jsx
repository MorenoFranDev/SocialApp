import { Navigate } from "react-router-dom";
import { getGeneralPost } from "../axios/querys";
import { useState, useEffect } from 'react'
import Navbar from "../Components/Pure/Navbar";
import Pick from "../Components/Pure/Pick";

export default function PicksPage() {
    const token = localStorage.getItem("token")

  const [DB, setDB] = useState([]);
  const getPosts = async () => {
    const arreglo = await getGeneralPost(token);
    
    const tamañoParte = (arreglo.length / 4);
    const partesDivididas = [];
    
    for (let i = 0; i < arreglo.length; i += tamañoParte) {
      partesDivididas.push(arreglo.slice(i, i + tamañoParte));
    }
    setDB(partesDivididas);
    console.log(partesDivididas)
  }

  useEffect(() => {
    const getPostGeneral = async () => {
      await getPosts();
    };
    getPostGeneral();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const renderImg = () => {
    if (DB.length === 0) {
      return <h1>No hay imagenes</h1>
    } else {
      console.log(DB)
      return DB.map((item, index) => (
        <div className="grid-wrapp" key={index}>
          {item.map((element, index) => (
            (element.Pick !== null) && <Pick {...element} key={index} />
          ))}

        </div>
      ))
    }
  }

  return (
    token === undefined ? (
      <Navigate to={"/login"} />
    ) : (
      <>
        <Navbar />
        <div className="container-img">
        {renderImg()}
        </div>
      </>
    )
  )
  
}
