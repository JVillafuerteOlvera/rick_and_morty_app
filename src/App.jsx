import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import Nav from './components/nav/nav.jsx';
import axios from 'axios';
import { Route, Routes } from "react-router-dom"
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';

const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff";

function App() {
   
   const [characters, setCharacters] = useState ([]);
   
   function onSearch(id) {
      const characerId = characters.filter(
      char  => char.id === Number(id))
      
      if (characerId.length) {
         return alert(`${characerId[0].name} ya existe!`)
      }

      axios(`${URL}/${id}?key=${API_KEY}`)
         .then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
const onClose = id => {
   setCharacters(characters.filter(char => char.id !== Number (id)))
}
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
             <Route path='/'
             element={<Cards characters={characters}
            onClose={onClose} />}
             />
             <Route
                 path='/about'
                 element={<About />}
                 /> 
            <Route
                 path='/detail/:id'
                 element={<Detail />}
                 /> 
         </Routes>
         <hr />
         </div>
   );
}

export default App;
