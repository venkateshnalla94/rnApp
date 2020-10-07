import React,{useState,useReducer} from 'react';
import { Text, StyleSheet,View, Button,TouchableOpacity} from "react-native";

const reducer=(state,action)=>{
     switch (action.type) {
          case 'Increase_counter':
               return {...state,counter:state.counter+action.payload};
          case 'Decrease_counter':
               return {...state,counter:state.counter+action.payload};
          default: return state
     
     }
}

const CounterScreen=()=>{
     const [state,dispatch]=useReducer(reducer,{counter:0})
     const {counter}=state;
     return(
          <View>
               <Button title="Increase" onPress={()=>{
                    dispatch({type:'Increase_counter',payload:1})
               }}/>
               <Button title="Decrease" onPress={()=>{
                    dispatch({type:'Decrease_counter',payload:-1})
               }}/>
               <Text>{counter}</Text>
          </View>
     )
}

const styles=StyleSheet.create({

})

export default CounterScreen;
