import { useState, useRef } from 'react';

export const useCalculator = () => {
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");
    const [currentNumber, setCurrentNumber] = useState("");
    const [operation, setOperation] = useState(null);
    const [hasResult, setHasResult] = useState(false);
    const inputRef = useRef(null);

    const handleNumberChange = (event) => {
        const value = event.target.value;
        if (!/^[\d.]*$/.test(value)) return;
        if (value.split('.').length > 2) return;
        
        if (hasResult) {
            setResult("");
            setOperation(null);
            setHasResult(false);
        }
        
        setDisplay(value);
        setCurrentNumber(value);
    };

    const performOperation = (num1, num2, op) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        
        if (isNaN(n1) || isNaN(n2)) return null;
        
        let result;
        switch(op) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    alert("No se puede dividir por cero");
                    return null;
                }
                result = n1 / n2;
                break;
            default:
                return null;
        }
        
        return Math.round(result * 100000000) / 100000000;
    };

    const handleOperation = (op) => {
        if (currentNumber === "") return;
        
        if (result === "") {
            setResult(currentNumber);
        } else {
            const newResult = performOperation(result, currentNumber, operation);
            if (newResult !== null) {
                setResult(newResult.toString());
            }
        }

        setOperation(op);
        setDisplay("");
        setCurrentNumber("");
        inputRef.current.focus();
    };

    const calculateResult = () => {
        if (currentNumber === "" || operation === null) return;
        
        const finalResult = performOperation(result, currentNumber, operation);
        if (finalResult !== null) {
            setResult(finalResult.toString());
            setDisplay(finalResult.toString());
            setOperation(null);
            setCurrentNumber("");
            setHasResult(true);
            inputRef.current.focus();
        }
    };

    const resetInput = () => {
        setDisplay("");
        setCurrentNumber("");
        setOperation(null);
        inputRef.current.focus();
    };

    const resetResult = () => {
        setResult("");
        setDisplay("");
        setCurrentNumber("");
        setOperation(null);
        setHasResult(false);
        inputRef.current.focus();
    };

    return {
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
    };
}; 