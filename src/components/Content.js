import React from 'react';


function Content({descripcion, frase}) {
  return (
    <div className="">
       <p>{descripcion}</p>
       <blockquote><i>{frase}</i></blockquote>
    </div>
  );
}

export default Content;