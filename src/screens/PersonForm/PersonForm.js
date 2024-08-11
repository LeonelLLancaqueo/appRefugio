
import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, Pressable} from "react-native";

import styles from "./styles"

import url from "../../components/urlApi";
import FormInput from '../../components/FormInput/FormInput';
import FormButon from '../../components/FormButon/FormButon';

const PersonForm= ()=>{

    
    const [textNombre, onchangetextNombre]= useState('');
    const [textApellido, onchangetextApellido]= useState('');
    const [textEmail, onchangetextEmail]= useState('');
    const [numberTel, onchangenumberTel]= useState('');

    const[errors, setErrors]= useState(false);
    const[enviado, setEnviado]= useState(false);
    const[inicio, setInicio]= useState(true);

    let nameInvalid= textNombre.trim().length === 0;
    let apellidoInvalid= textApellido.trim().length === 0;
    let emailInvalid= textEmail.trim().length === 0;
    let telInvalid= numberTel.trim().length === 0;

    let disabled_press=  nameInvalid || apellidoInvalid || emailInvalid  || telInvalid;  


    const enviarDatos= async ()=>{
        
        setInicio(false);
        if(disabled_press){
            setErrors(true);
            setEnviado(false);
            
        }else{
            let persona= {
                nombre: textNombre,
                apellido: textApellido,
                email: textEmail,
                tel: numberTel,
            } 
    
            
            const baseUrl= url+'personas';  
    
            await fetch(baseUrl,{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(persona),
    
            }).then( response =>{
                onchangenumberTel('');
                onchangetextApellido('');
                onchangetextEmail('');
                onchangetextNombre('');
                setErrors(false);
                setEnviado(true)
                setInicio(true)
                return response.json();
            })
        }

        

        
    }
    return(
        <View style={styles.container}>
            
            <SafeAreaView style={styles.form}>
                
                <Text style={styles.titleStyle} > Registrar Personas </Text>

                    <FormInput labelInput="Nombre" onChangeText={onchangetextNombre} valueText= {textNombre} inicio={inicio} errors={errors} invalid={nameInvalid}/>
                       
                    <FormInput labelInput="Apellido" onChangeText={onchangetextApellido} valueText= {textApellido} inicio={inicio} errors={errors} invalid={apellidoInvalid}/>
                 
                    <FormInput labelInput="Email" onChangeText={onchangetextEmail} valueText= {textEmail} inicio={inicio} errors={errors} invalid={emailInvalid}/>

                    <FormInput labelInput="Telefono" onChangeText={onchangenumberTel} valueText= {numberTel} inicio={inicio} errors={errors} invalid={telInvalid}/>
                
                    <FormButon onPress={enviarDatos}  inicio={inicio}  enviado={enviado}/>
                    

                    
                    
            </SafeAreaView>

            
            
        </View>
    )
}



export default PersonForm;