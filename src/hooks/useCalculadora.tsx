import React, { useRef, useState } from 'react';

// Enumeradores
enum Operadores {
    sumar, restar, multiplicar, dividir
}


export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const clean = ()=>{
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numPress: string)=>{

        // Verificacion de punto decimal, no aceptar doble punto
        if (numero.includes('.') && numPress === '.'){return}
        if (numero.startsWith('0') || numero.startsWith('-0')){

            // Punto decimal
            if (numPress === '.'){
                setNumero(numero + numPress)
            } 
            // Evaluar si es otro cero y hay un punto
            else if(numPress === '0' && numero.includes('.')){
                setNumero(numero + numPress)
            }
            // Evaluar si es un numero diferente de cero y no hay un punto
            else if(numPress !== '0' && !numero.includes('.')){
                setNumero(numPress)
            }
            // Evitar el 000.0000
            else if(numPress === '0' && !numero.includes('.')){
                setNumero(numero)
            }
            else {
                setNumero(numero + numPress)
            }
        } else {
            setNumero(numero + numPress)
        }

    }


    const deleteNumber = ()=>{

        let negative = ''
        let numTemp = numero
        if (numero.includes('-')){
            negative='-'
            numTemp = numero.substring(1)
        }
        if (numTemp.length > 1){
            setNumero(negative + numTemp.slice(0, -1))
        } else {setNumero('0')}

    }

    const positiveNegative = ()=>{
        if (numero.includes('-')){
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const changeLastNum = ()=>{
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0, -1))           
        } else {
            setNumeroAnterior(numero)
        }
 
        setNumero('0')
    }

    const btnDividir = ()=>{
        changeLastNum()
        ultimaOperacion.current = Operadores.dividir
        
    }

    const btnMultiplicar = ()=>{
        changeLastNum()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnSumar = ()=>{
        changeLastNum()
        ultimaOperacion.current = Operadores.sumar
    }

    const btnRestar = ()=>{
        changeLastNum()
        ultimaOperacion.current = Operadores.restar
    }

    const calcular = ()=>{

        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero( `${num2 + num1}` )
                break
                
            case Operadores.restar:
                setNumero( `${num2 - num1}` )
                break

            case Operadores.dividir:
                if (num1 !== 0){
                    setNumero( `${num2 / num1}` )
                }
                break

            case Operadores.multiplicar:
                setNumero( `${num2 * num1}` )
                break

            default:
                break;
        }

        setNumeroAnterior( '0' )
    }

    return {numero, 
        numeroAnterior, 
        armarNumero,
        clean,
        positiveNegative,
        deleteNumber,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular}

};
