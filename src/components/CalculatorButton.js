import React from 'react';

const CalculatorButton = ({ onClick, className, children }) => {
    return (
        <button 
            onClick={onClick}
            className={`calculator-button ${className}`}
        >
            {children}
        </button>
    );
};

export default CalculatorButton; 