import React from 'react';

const CalculatorInput = ({ inputRef, value, onChange, placeholder }) => {
    return (
        <input
            ref={inputRef}
            onChange={onChange}
            type="text"
            value={value}
            className="calculator-input"
            placeholder={placeholder}
            autoFocus
        />
    );
};

export default CalculatorInput; 