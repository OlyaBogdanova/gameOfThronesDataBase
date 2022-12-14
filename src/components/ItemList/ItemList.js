import React, { useState, useEffect } from 'react';
import './ItemList.scss';
import Spinner from '../Spinner/spinner';

function ItemList({ getData, onItemSelected, renderItem }) {
    const [itemList, updateList] = useState([]);
    useEffect(() => {
        getData().then((data) => {
            updateList(data);
        });
    }, []);

    function renderItems(arr) {
  
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <li
                    key={id}
                    className='list-group-item'
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    if (!itemList) {
        return <Spinner />;
    }

    const items = renderItems(itemList);

    return <ul className='list-group item-list'>{items}</ul>;
}

export default ItemList;
