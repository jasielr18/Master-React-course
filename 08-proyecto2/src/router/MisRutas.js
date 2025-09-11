import React from 'react'
import {Routes,Route, BrowserRouter, NavLink } from "react-router-dom";
import {Inicio} from "../components/Inicio";
import {Portafolio} from "../components/Portafolio";
import {Curriculum} from "../components/Curriculum";
import {Servicios} from "../components/Servicios";
import {Contacto} from "../components/Contacto";
import { HeaderNav } from '../layout/HeaderNav';
import { FooterOfWeb } from '../layout/FooterOfWeb';

export const MisRutas = () => {

  return (
    <BrowserRouter>
      
      {/*HEADER Y NAVEGACION*/}
      <HeaderNav/>

      {/*CONTENIDO PRINCIPAL*/}
        <Routes>
           <Route index element={<Inicio/>}/>
           <Route path='/inicio' element={<Inicio/>}/>
           <Route path='/portafolio' element={<Portafolio/>}/>
           <Route path='/curriculum' element={<Curriculum/>}/>
           <Route path='/servicios' element={<Servicios/>}/>
           <Route path='/contacto' element={<Contacto/>}/>
        </Routes>

         <hr/>
      {/*FOOTER*/}

      <FooterOfWeb/>
      
      
      
    
    </BrowserRouter>
  )
}
