import React, { useState, useEffect } from 'react';
import './CharDetails.scss';
import Field from '../Field/Field';

function CharDetails({ itemId, getData }) {
    const [itemDetails, updateItemDetails] = useState([]);

    useEffect(() => {
      
        getData(itemId).then((Details) => {
            console.log(Details);
           updateItemDetails(Details);
        });
    }, []);


    function renderItems(obj) {
       
        const entries = Object.entries(obj).map((entry) => {
            const [key, value] = entry;
            if (key === 'id') {
                return;
            }
            return (
                <Field
                    key={key}
                    label={key}
                    field={value}
                />
            );
        });
        return entries;
    }

    const { name } = itemDetails;
    const items = renderItems(itemDetails);
    return (
        <div className='char-details rounded'>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush'>{items}</ul>
        </div>
    );
}
export default CharDetails;
