import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff";

export default function Detail(props) {
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return (
       <div>
        <h1> Detail </h1>
        <p>Visita mi 
            <a 
            href="https://github.com/JVillafuerteOlvera"
            target= "_blank"
        >GitHub</a> 
        </p>
       </div>
    );      
 } 
 