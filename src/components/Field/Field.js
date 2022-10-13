import React from 'react';

const Field = ({ field, label }) => {
  
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='term'>{label}</span>
            <span>{(!field || !field[0]) ? 'no data:(' : field}</span>
        </li>
    );
};

export default Field;
