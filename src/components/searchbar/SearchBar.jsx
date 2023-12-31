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
      </div>
   );
}
