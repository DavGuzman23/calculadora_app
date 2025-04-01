import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
    const {
        display,
        result,
        currentNumber,
        operation,
        inputRef,
        handleNumberChange,
        handleOperation,
        calculateResult,
        resetInput,
        resetResult
    } = useCalculator();

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Modern Calculator</h1>
            
            <CalculatorDisplay
                result={result}
                operation={operation}
                currentNumber={currentNumber}
            />
            
            <CalculatorInput
                inputRef={inputRef}
                value={display}
                onChange={handleNumberChange}
                placeholder="Enter a number"
            />

            <div className="buttons-grid">
                <CalculatorButton 
                    onClick={() => handleOperation('+')}
                    className="button-primary"
                >
                    +
                </CalculatorButton>
                <CalculatorButton 
                    onClick={() => handleOperation('-')}
                    className="button-danger"
                >
                    -
                </CalculatorButton>
                <CalculatorButton 
                    onClick={() => handleOperation('*')}
                    className="button-success"
                >
                    ×
                </CalculatorButton>
                <CalculatorButton 
                    onClick={() => handleOperation('/')}
                    className="button-warning"
                >
                    ÷
                </CalculatorButton>
            </div>

            <div className="buttons-grid">
                <CalculatorButton 
                    onClick={calculateResult}
                    className="button-primary"
                >
                    =
                </CalculatorButton>
                <CalculatorButton 
                    onClick={resetInput}
                    className="button-secondary"
                >
                    Reset Input
                </CalculatorButton>
                <CalculatorButton 
                    onClick={resetResult}
                    className="button-secondary"
                >
                    Reset Result
                </CalculatorButton>
            </div>
        </div>
    );
};

export default Calculator;
