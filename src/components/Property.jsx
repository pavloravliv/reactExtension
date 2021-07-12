import React, { useState } from 'react';

export default function Property({ propertyName, changeRate }) {
    const [inputState, setInputState] = useState('');
    const handleChange = event => {
        setInputState(event.target.value);
    };
    const handleButtonPlus = () => setInputState(prevInputState => +prevInputState + +changeRate);
    const handleButtonMinus = () => setInputState(prevInputState => +prevInputState - +changeRate);
    return (
        <div>
            <div>{propertyName}</div>
            <input type='text' value={inputState} onChange={handleChange} />
            <button onClick={handleButtonPlus}>+</button>
            <button onClick={handleButtonMinus}>-</button>
        </div>
    );
}
