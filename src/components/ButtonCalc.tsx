import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface IButtonCalc {
    text: String,
    color?: String,
    isZero?: Boolean,
    Touch: (textNumber : string) => {},
}
export const ButtonCalc = ({ text, color = styles.cicleNumberButtonContainer.backgroundColor, Touch, isZero = false } : IButtonCalc) => {
    return (
        <View>
            <TouchableOpacity 
            onPress={() => Touch(text)}>
                <View style={{ 
                    ...styles.cicleNumberButtonContainer, 
                    backgroundColor: color,
                    width: isZero ? 180 : 80,}}>
                    <Text style={{
                    ...styles.circleNumberButtonText,
                    color: color === "#9B9B9B" ? 'black' : 'white'}}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );  
}