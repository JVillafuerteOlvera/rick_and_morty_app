import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Card(props) {

   const dispatch = useDispatch
   const [isFav, setIsFav ] =  useState(false)
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(remove(props.id));  
      } else {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }
   return (
      <div
      style={{
         backggroundColor: "grey",
         margin: "20px",
         padding: "20px",
         borderRadius: "15px",
      }}
      >
      
      {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
            
        <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Id: {props.id}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} />
         </Link>
         </div>
      
   );
}
