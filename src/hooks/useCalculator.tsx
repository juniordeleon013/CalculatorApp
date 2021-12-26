import { useRef, useState } from 'react';


enum Operators {
    addition, subtraction, multiplication, division
}

export const useCalculator = () => {
    const [result, setResult] = useState('0');
    const [previousResult, setPreviousResult] = useState('0');
    
    const lastOperator = useRef<Operators>()

    const cleanResult = () => {
        setResult("0");
        setPreviousResult('0');
    }

    const makeResult = ( textNumber: string) => {
        
        //validation results
        //doest accept double point
        if( result.includes('.') && textNumber === '.') return;

        //check if result start with 0 or -0
        if( result.startsWith('0') || result.startsWith('-0')){
            
            //agregar punto para decimal cuando hay un 0 delante
            if( textNumber === '.'){
                setResult(result + textNumber);

                //evaluar si es otro cero y hay un punto
            }else if( textNumber === '0' && result.includes('.')){
                setResult( result + textNumber);

                //evaluate if is different of 0 and donest have pooint
            }else if(textNumber !== '0' && !result.includes('.')){
                setResult( textNumber );

                //avoid 0000.000
            }else if(result === '0' && !result.includes('.')) {
                setResult( result )
            }else{
                setResult( result + textNumber);
            }

        }else{
            setResult( result + textNumber);
        }
    }

    const positiveNegative = () => {
        if( result.includes('-')){
            setResult(result.replace('-', ''));
        }else{
            setResult('-' + result);
        }
    }

    const deleteOneElementResult = () => {
        if(result.length > 1){
            if(result.includes('-') && result.length === 2) return;
            
            let slicedResult = result.slice(0, -1);
            setResult(slicedResult);
        }else{
            setResult('0');
        }
        
    }

    const changeNumByPrevious = () => {
        let currentResult = result;
        if( currentResult.endsWith('.')){
            setPreviousResult(currentResult.slice(0, -1))
        }else{
            setPreviousResult( result );
        }

        setResult('0');
    }

    const divisionOperation = () => {
        changeNumByPrevious();
        lastOperator.current = Operators.division;
    }

    const multiplicationOperation = () => {
        changeNumByPrevious();
        lastOperator.current = Operators.multiplication;
    }

    const subtractionOperation = () => {
        changeNumByPrevious();
        lastOperator.current = Operators.subtraction;
    }

    const additionOperation = () => {
        changeNumByPrevious();
        lastOperator.current = Operators.addition;
    }

    const calculate = () => {
        const num = Number( result );
        const num2 = Number( previousResult );
        

        switch (lastOperator.current) {
            case Operators.addition:
                setResult(`${num + num2}`);
                break;
            case Operators.subtraction:
                setResult(`${num2 - num}`);
                break;
            case Operators.multiplication:
                setResult(`${num * num2}`);
                break;
            case Operators.division:
                setResult(`${num2 / num}`);
                break;
        }
        setPreviousResult('0');
    }

    return {
        cleanResult,
        makeResult,
        positiveNegative,
        deleteOneElementResult,
        divisionOperation,
        multiplicationOperation,
        subtractionOperation,
        additionOperation,
        calculate,
        result,
        previousResult,
    }
}