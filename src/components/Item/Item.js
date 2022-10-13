import React, { Component } from 'react';
import GotService from '../../services/gotService';
import CharDetails from '../CharDetails/CharDetails';

function Item ({ id, service } ) {
    const gotService = new GotService();

        return (
            <CharDetails
                itemId={id}
                getData={service}
            />
        );
    
}

export default Item;
