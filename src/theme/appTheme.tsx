import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundTheme: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    bigResultText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right'
    },
    specialResultText: {
        fontSize: 28,
        color: 'rgba(255,255,255,0.5)',
        textAlign:'right'
    },
    cicleNumberButtonContainer: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    circleNumberButtonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    }
});