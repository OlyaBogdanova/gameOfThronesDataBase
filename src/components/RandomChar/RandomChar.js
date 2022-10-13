import React, { useState, useEffect } from 'react';
import GotService from '../../services/gotService';
import './RandomChar.scss';
import Spinner from '../Spinner/spinner';
import PropTypes from 'prop-types';

function RandomChar({ interval }) {
    const gotService = new GotService();
    const [char, updateChar] = useState({});
    const [loading, showLoading] = useState(true);

    useEffect(() => {
        updateChar();
        setInterval(updateCharacter, interval);
    }, []);

    function onCharLoaded(char) {
        updateChar(char);
        showLoading(false);
    }

    function updateCharacter() {
        const id = Math.floor(Math.random() * 140 + 25);
        gotService.getCharacters(id).then(onCharLoaded);
    }

    let content;

    if (loading === true) {
        content = <Spinner />;
    } else content = <View char={char} />;

    return <div className='random-block rounded'>{content}</div>;
}

RandomChar.propTypes = {
    interval: PropTypes.number,
};

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Gender</span>
                    <span>{gender}</span>
                </li>

                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Born</span>
                    <span>{born}</span>
                </li>

                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Died</span>
                    <span>{died}</span>
                </li>

                <li className='list-group-item d-flex justify-content-between'>
                    <span className='term'>Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
};

export default RandomChar;
