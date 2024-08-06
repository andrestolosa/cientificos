import React from 'react';
import './Card.css';
import Title from './Title';
import Content from './Content';
import Footer from './Footer';


function Card(props) {
  return (
    <div className="card">
      <Title 
        image={props.image}
        nombre={props.nombre}
      />
      <Content 
        descripcion={props.descripcion}
        frase={props.frase}
      />
      <Footer 
        nacimiento={props.nacimiento}
        muerte={props.muerte}
      />
    </div>
  );
}

export default Card;