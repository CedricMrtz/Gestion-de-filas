import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// props passed to the component
interface BtnCardProps {
    text: string;
}

//Definition of the component
const BtnCard: React.FC<BtnCardProps> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

//Styles for the component
const styles = StyleSheet.create({
    container:{
        display: "flex",
        width: 199,
        height: 40,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        borderRadius: 100,
        backgroundColor: "#508991",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,

        elevation: 3, // For Android shadow
    },
    text:{
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    },
    
})

export default BtnCard;