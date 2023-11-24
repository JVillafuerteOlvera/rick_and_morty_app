import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import Nav from './components/nav/nav.jsx';
import axios from 'axios';

const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff";

function App() {
   
   const [characters, setCharacters] = useState ([]);
   
   function onSearch(id) {
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <hr />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
