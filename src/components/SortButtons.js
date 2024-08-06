import React from 'react';
import './SortButtons.css';

const SortButtons =({sortByName, sortByDate}) =>(
    <div className='sort-buttons'>
        <button onClick={sortByName}><b>Ordenar Por Nombre</b></button>
        <button onClick={sortByDate}><b>Ordenar Por Fecha</b></button>
    </div>
);

export default SortButtons;