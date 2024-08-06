import React from 'react';


function Title({nombre, image}) {
  return (
    <div>
      <img className='cientificoPhoto' src={image} alt={nombre}></img> 
      <h2 className='name'>{nombre}</h2>
    </div>
  );
}

export default Title;