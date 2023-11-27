import React from "react";
const banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
export default function Form(props) {
    return (
    <div>
        <img 
        src={banner} 
        style={{width: "300px"}} 
        alt="" 
        />
        <form >
            <label>email: </label>
            <input type="text "/>
            <br /> 

            <label>Password: </label>
            <input type="password "/>
            <hr /> 

            <button type= "sumbit">  Enviar</button>

        </form>
    </div>)
}