import React from 'react';

const CalculatorDisplay = ({ result, operation, currentNumber }) => {
    return (
        <div className="calculator-display" role="textbox" aria-label="Resultado de la calculadora">
            <span title={result}>{result}</span>
            {operation && <span className="operation" title={`Operador: ${operation}`}>{operation}</span>}
            {currentNumber && <span title={currentNumber}>{currentNumber}</span>}
        </div>
    );
};

export default CalculatorDisplay; 