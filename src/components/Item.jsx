import React, { useState, useEffect } from 'react';
import './index.css';
import Property from './Property';
export default function Item({ itemData }) {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        for (const key in itemData) {
            console.log(properties);
            setProperties(prevProperties => [
                ...prevProperties,
                <div key={key} className='rows '>
                    <Property propertyName={key} changeRate={itemData['change-rate']} />
                </div>,
            ]);
        }
    }, [itemData]);
    return (
        //for in
        <div className='rows '>
            <div className='columns item'>{properties}</div>
        </div>
    );
}
