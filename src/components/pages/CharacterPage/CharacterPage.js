import React, { Component } from 'react';
import ItemList from '../../ItemList/ItemList';
import { withRouter } from 'react-router-dom';
import Error from '../../Error/Error';
import GotService from '../../../services/gotService';

function CharacterPage({ history }) {
    const gotService = new GotService();

    return (
        <ItemList
            onItemSelected={(itemId) => {
                history.push(itemId);
            }}
            getData={gotService.getAllCharacters}
            renderItem={({ name }) => name}
        />
    );
}
export default withRouter(CharacterPage);
