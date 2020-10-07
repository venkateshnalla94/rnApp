import React,{useState,useReducer} from 'react';
import { Text, StyleSheet,View, Button,TouchableOpacity,TextInput} from "react-native";

const TextScreen=()=>{
     const[name,setName]=useState('');
     return(
          <View>
               <Text>Enter Your Password</Text>
               <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                    value={name}
                    onChangeText={(newValue)=>{setName(newValue)}}
               />
               {name.length>4?<Text>Your password  is good</Text>:<Text>Your password  is bad</Text>}
          </View>
     )
}

const styles=StyleSheet.create({
     textInput:{
          margin:15,
          borderColor:"black",
          borderWidth:1
     }
     
})

export default TextScreen;
