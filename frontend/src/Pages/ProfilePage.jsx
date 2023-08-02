
import {  useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getPersonPost } from "../axios/querys";
import Navbar from "../Components/Pure/Navbar";
import Pick from "../Components/Pure/Pick";

export const ProfilePage = () => {
  const { profile } = useParams()

  const [DB, setDB] = useState([]);
  const getPosts = async () => {

    const arreglo = await getPersonPost(profile)

    if(arreglo.length >= 1){

      const tamañoParte = (arreglo.length / 4);
      const partesDivididas = [];
      
      for (let i = 0; i < arreglo.length; i += tamañoParte) {
        partesDivididas.push(arreglo.slice(i, i + tamañoParte));
      }
      return setDB(partesDivididas);
    }else{
      alert("No tiene post")
    }
  };

  useEffect(() => {
    const getPostGeneral = async () => {
      await getPosts();
    };
    getPostGeneral();
  }, []);


  const renderImg = () => {
    if (DB.length === 0) {
      return <h1>No hay imagenes</h1>
    } else {
      return DB.map((item, index) => (
        <div className="grid-wrapp" key={index}>
          {item.map((element, index2) => (
            (element.Pick !== null) && <Pick {...element} key={index2} />
          ))}

        </div>
      ))
    }
  }

  return (
      <>
        <Navbar />
        <div className="container-img">
          {renderImg()}
        </div>
      </>
    )
}