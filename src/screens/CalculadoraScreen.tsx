import React from 'react';
import { Text, View } from 'react-native';
import { ButtomCalc } from '../components/ButtomCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';


export const CalculadoraScreen = () => {

    const {numero, 
        numeroAnterior, 
        armarNumero,
        clean,
        positiveNegative,
        deleteNumber,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular} = useCalculadora()

  return (
      <View style={styles.calculadoraContainer}>
          {
              (numeroAnterior !== '0') && 
                (
                    <Text style={styles.smallResult}>{numeroAnterior}</Text>
                )
          }
            <Text 
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}>
                    {numero}
            </Text>

        <View style={styles.fila}>
            <ButtomCalc text='C' color= '#9B9B9B' onPress={clean}/>
            <ButtomCalc text='+/-' color= '#9B9B9B' onPress={positiveNegative}/>
            <ButtomCalc text='del' color= '#9B9B9B' onPress={deleteNumber}/>
            <ButtomCalc text='/' color= '#FF9427' onPress={btnDividir}/>
        </View>

        <View style={styles.fila}>
            <ButtomCalc text='7' onPress={armarNumero}/>
            <ButtomCalc text='8' onPress={armarNumero}/>
            <ButtomCalc text='9' onPress={armarNumero}/>
            <ButtomCalc text='X' color= '#FF9427' onPress={btnMultiplicar}/>
        </View>

        <View style={styles.fila}>
            <ButtomCalc text='4' onPress={armarNumero}/>
            <ButtomCalc text='5' onPress={armarNumero}/>
            <ButtomCalc text='6' onPress={armarNumero}/>
            <ButtomCalc text='-' color= '#FF9427' onPress={btnRestar}/>
        </View>


        <View style={styles.fila}>
            <ButtomCalc text='1' onPress={armarNumero}/>
            <ButtomCalc text='2' onPress={armarNumero}/>
            <ButtomCalc text='3' onPress={armarNumero}/>
            <ButtomCalc text='+' color= '#FF9427' onPress={btnSumar}/>
        </View>

        <View style={styles.fila}>
            <ButtomCalc text='0' ancho={true} onPress={armarNumero}/>
            <ButtomCalc text='.' onPress={armarNumero}/>
            <ButtomCalc text='=' color= '#FF9427' onPress={calcular}/>
        </View>

      </View>
  )
};
