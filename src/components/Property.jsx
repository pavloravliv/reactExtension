import React, { useState } from 'react';

export default function Property({ propertyName }) {
    const [inputState, setInputState] = useState('');
    const handleChange = event => {
        setInputState(event.target.value);
    };
    const handleButtonPlus = () => setInputState(prevInputState => +prevInputState + 1);
    const handleButtonMinus = () => setInputState(prevInputState => +prevInputState - 1);
    return (
        <div>
            <div>{propertyName}</div>
            <input type='text' value={inputState} onChange={handleChange} />
            <button onClick={handleButtonPlus}>+</button>
            <button onClick={handleButtonMinus}>-</button>
        </div>
    );
}
