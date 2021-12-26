import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';



export const MainScreen = () => {
    const { 
        additionOperation, 
        subtractionOperation, 
        multiplicationOperation, 
        divisionOperation,
        deleteOneElementResult,
        positiveNegative,
        makeResult,
        cleanResult,
        calculate,
        result,
        previousResult, 
    } = useCalculator();

    return (
        <View style={ styles.calculatorContainer }>
            <Text style={styles.specialResultText}>{ previousResult !== '0' ? previousResult : '' }</Text>
            <Text
                style={styles.bigResultText}
                numberOfLines={ 1 }
                adjustsFontSizeToFit>{ result }</Text>
            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="C" color="#9B9B9B" Touch={cleanResult}/>
                <ButtonCalc text="+/-" color="#9B9B9B" Touch={positiveNegative}/>
                <ButtonCalc text="del" color="#9B9B9B" Touch={deleteOneElementResult}/>
                <ButtonCalc text="/" color="#ff9427" Touch={divisionOperation}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="7" Touch={makeResult}/>
                <ButtonCalc text="8" Touch={makeResult}/>
                <ButtonCalc text="9" Touch={makeResult}/>
                <ButtonCalc text="X" color="#ff9427" Touch={multiplicationOperation}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="4" Touch={makeResult}/>
                <ButtonCalc text="5" Touch={makeResult}/>
                <ButtonCalc text="6" Touch={makeResult}/>
                <ButtonCalc text="-" color="#ff9427" Touch={subtractionOperation}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="1" Touch={makeResult}/>
                <ButtonCalc text="2" Touch={makeResult}/>
                <ButtonCalc text="3" Touch={makeResult}/>
                <ButtonCalc text="+" color="#ff9427" Touch={additionOperation}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="0" isZero Touch={makeResult}/>
                <ButtonCalc text="." Touch={makeResult}/>
                <ButtonCalc text="=" color="#ff9427" Touch={calculate}/>
            </View>
            {/* row buttons */}
            
        </View>
    )
}