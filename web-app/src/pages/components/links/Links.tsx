import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './Links.css';

import { MainSupplier } from '../../main_fornecedores/MainSupplier';
import { Cars } from '../../Cars';
import { Register } from '../../register/Register';

export const Links = () => {
  return (
    <Router>
      <div className='links-main-div'>
        <ul>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to=''> Meus Produtos </Link></li>
          <li><Link to=''> Minhas Categorias </Link></li>
          <li><Link to=''> Minhas Promoções </Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/home' element={<MainSupplier />} /> 
        <Route path='/cars' element={<Cars />} /> 
        <Route path='/cadastro' element={<Register />} /> 
      </Routes>
    </Router>
  );
};
  