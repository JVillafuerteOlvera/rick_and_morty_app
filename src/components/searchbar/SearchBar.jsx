import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState("");  
   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }
   
   const handleOnClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random()*870) + 1
      return randomNumber
   }
   const handleToogle = e => { 
      e.preventDefault()
      props.onSearch(getRandomNumber())
      setId("");
   }

   return (
      <div>
         <input
            value={id}
            type="text"
            name="search"
            id="search"
            placeholder="Enter character id..."
            onChange={handleChange}
         />
         <button onClick={handleOnClick}>Search</button>
         <button onClick={handleToogle}>Random</button>
      </div>
   );
}
