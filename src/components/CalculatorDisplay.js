import React from 'react';

const CalculatorDisplay = ({ result, operation, currentNumber }) => {
    return (
        <div className="calculator-display">
            <span>{result}</span>
            {operation && <span className="operation">{operation}</span>}
            {currentNumber && <span>{currentNumber}</span>}
        </div>
    );
};

export default CalculatorDisplay; 