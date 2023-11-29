import React, { useState } from "react";

const banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"

export default function Form(props) {
    const [userData, setUserData] = useState({     
    email:"",
    password:"."
    });

    const handleChange = (event) => {
        const {name, value} =  event.target; 
        setUserData({
            ...userData,
            [name]: value
            
        })
        console.log("value: ", value)   
    }

    return (
    <div>
        <img 
        src={banner} 
        style={{width: "300px"}} 
        alt="" 
        />
        <form >
            <label>email: </label>
            <input 
               type="text "
               name="email"
               value={userData.email}
               onChange={handleChange}
               placeholder="Ingresar email..."/>
               
            <br /> 

            <label>Password: </label>
            <input 
            type="password"
              key="password"
              name= "password"
              value= {userData.password}
              onChange={handleChange}
              placeholder="Ingresar password..."
              />
           
            <hr /> 

            <button type= "sumbit">  Enviar</button>

        </form>
    </div>)
}