import React, { useState, useEffect } from 'react';
import './index.css';
import Item from './Item';
export default function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    const items = data.map(itemData => <Item key={itemData.id} itemData={itemData} />);
    return (
        <div>
            <div>
                <div>Items:</div>
                {items}
            </div>
        </div>
    );
}
