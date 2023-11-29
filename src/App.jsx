import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Form from './components/form/Form.jsx';

const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff";

function App() {

   const navigate = useNavigate()
   const location = useLocation()
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
      navigate("/");
   }
const onClose = id => {
   setCharacters(characters.filter(char => char.id !== Number (id)))
}
   return (
      <div className='App'>
         {
            location.pathname !== "/! " &&    <Nav onSearch={onSearch}/>
         }
         <Routes>
              <Route
            path='/'
            element={<Form />}
            /> 
             <Route 
             path='/'
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
            <Route 
            path='*'
            element={<NotFound />} />
         </Routes>
         <hr />
         </div>
   );
}

export default App;
