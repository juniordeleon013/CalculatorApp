import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';


export const MainScreen = () => {
    return (
        <View style={ styles.calculatorContainer }>
            <Text style={styles.specialResultText}>1,500.00</Text>
            <Text style={styles.bigResultText}>1,500.00</Text>
            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="C" color="#9B9B9B" Touch={() => {console.log("c")}}/>
                <ButtonCalc text="+/-" color="#9B9B9B" Touch={() => {console.log("+/-")}}/>
                <ButtonCalc text="del" color="#9B9B9B" Touch={() => {console.log("del")}}/>
                <ButtonCalc text="/" color="#ff9427" Touch={() => {console.log("/")}}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="7" Touch={() => {console.log("7")}}/>
                <ButtonCalc text="8" Touch={() => {console.log("8")}}/>
                <ButtonCalc text="9" Touch={() => {console.log("9")}}/>
                <ButtonCalc text="X" color="#ff9427" Touch={() => {console.log("x")}}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="4" Touch={() => {console.log("4")}}/>
                <ButtonCalc text="5" Touch={() => {console.log("5")}}/>
                <ButtonCalc text="6" Touch={() => {console.log("6")}}/>
                <ButtonCalc text="-" color="#ff9427" Touch={() => {console.log("-")}}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="1" Touch={() => {console.log("1")}}/>
                <ButtonCalc text="2" Touch={() => {console.log("2")}}/>
                <ButtonCalc text="3" Touch={() => {console.log("3")}}/>
                <ButtonCalc text="+" color="#ff9427" Touch={() => {console.log("+")}}/>
            </View>
            {/* row buttons */}

            {/* row buttons */}
            <View style={styles.buttonRow}>
                <ButtonCalc text="0" isZero Touch={() => {console.log("0")}}/>
                <ButtonCalc text="." Touch={() => {console.log(".")}}/>
                <ButtonCalc text="=" color="#ff9427" Touch={() => {console.log("=")}}/>
            </View>
            {/* row buttons */}
            
        </View>
    )
}