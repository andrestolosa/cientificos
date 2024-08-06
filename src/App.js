import React from 'react';
import Card from './components/Card';
import SortButtons from './components/SortButtons.js';
import cientificos from './components/utils/utils2.js'
import './App.css';
import { useState } from 'react';

function App() {
  const [scientists, setScientists] =useState(cientificos);

  const sortByName = () =>{
    const sortByName=[...scientists].sort((a, b)=> a.nombre.localeCompare(b.nombre));
    setScientists(sortByName);
  };

  const sortByDate = () =>{
    const sortByDate=[...scientists].sort((a, b)=> a.año - b.año);
    setScientists(sortByDate);
  };

  const renderCards =() =>{
    return scientists.map((cientifico) =>(
      <Card 
        key={cientifico.key}
        nombre={cientifico.nombre}
        titulo={cientifico.tituo}
        año={cientifico.año}
        descripcion={cientifico.descripcion}
        frase={cientifico.fraseCelebre}
        nacimiento={cientifico.nacimiento}
        muerte={cientifico.muerte}
        image={cientifico.imagen}
      />
    ));
  };

  return (
    <div className="container">
      <h1 className='main-title'>Cientifico Famosos </h1>
      <SortButtons sortByName={sortByName} sortByDate={sortByDate}/>
      <div className="card-container">
        {renderCards()}  
      </div>         
    </div>
  );
}

export default App;
