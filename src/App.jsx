import './App.css';
import axios from 'axios';
import {useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';

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
      navigate("/home");
   }

const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== Number (id)))
}

const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = '123456';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   } else {
      alert("Credenciales incorrectas!")
   }
}

function logout(){
   setAccess(false);
}

useEffect(() => {
   !access && navigate('/home');
}, [access]);

return (
      <div className='App'>
         {
            location.pathname !== "/! " ? <Nav onSearch={onSearch} logout={logout}/> : null
         }
         <Routes>
              <Route
            path='/'
            element={<Form login={login}/>}
            /> 
             <Route 
             path='/home'
             element={<Cards characters={characters} onClose={onClose} />}
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
               path="/favorites"
               element={<Favorites onClose={onClose} />} />
            <Route 
            path='*'
            element={<NotFound />} />
         </Routes>
         <hr />
         </div>
   );
}

export default App;
