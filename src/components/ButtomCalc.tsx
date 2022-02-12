import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: string,
    ancho?: boolean,
    onPress: (action:string) => void
}

export const ButtomCalc = ({text, color = '#333', ancho=false,onPress}:Props) => {
  return (
    <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: (ancho)? 180 : 80}}>
        <TouchableOpacity onPress={() => onPress(text)}>
            <Text style={{
                ...styles.textButton,
                color: (color === '#9B9B9B') ? 'black' : 'white'}}>{text}</Text>
        </TouchableOpacity>
    </View>      
  )
};
