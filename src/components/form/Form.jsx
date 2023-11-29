import React, { useState } from "react";
import validation from "../../utils/validation"

const banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"

export default function Form(props) {
    const [userData, setUserData] = useState({     
    email:"",
    password:""
    });
    const [errors, setErrors ] = useState({
        email:"Ingrese su email",
    password:"Ingrese su password"
    })


    const handleChange = (event) => {
        const {name, value} =  event.target; 
        setUserData({
            ...userData,
            [name]: value
            
        })
          setErrors(validation({
            ...userData,
            [name]: value
          }));
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }
    return (
    <div>
        <img 
        src={banner} 
        style={{width: "300px"}} 
        alt="" 
        />
        <form onSubmit={handleSubmit} >
             
            <label>email: </label>
            <input 
               type="text "
               name="email"
               value={userData.email}
               onChange={handleChange}
               placeholder="Ingresar email..."/>
               
            <p style={{color:"coral"}}> {errors.email ? errors.email : null} </p> 

            <label>Password: </label>
            <input 
            type="password"
              key="password"
              name= "password"
              value= {userData.password}
              onChange={handleChange}
              placeholder="Ingresar password..."/>

<p style={{color:"coral"}}> {errors.password && errors.password } </p> 
           
            <hr /> 

            <button 
            type= "sumbit"
            disabled={errors.email || errors.password}
            >  
            Enviar</button>

        </form>
    </div>)
}