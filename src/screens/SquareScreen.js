import React, { useReducer } from "react";
import {
     Text,
     StyleSheet,
     View,
     Button,
     TouchableOpacity,
     FlatList
} from "react-native";
import ColourCounter from "../Components/ColourCounter";

const COLOUR_INCREMENT=15;

const reducer=(state,action)=>{
     /**
      * state={red:num, blue:num,green:num}
      * action={colourTochange:red||blue||green,amount:+15||-15}
      */
     switch (action.colourToChange) {
          case 'red':
             return state.red+action.amount>255||state.red+action.amount<0
                  ? state
                  : {...state,red:state.red+action.amount};
          case 'green':
             return state.green+action.amount>255||state.green+action.amount<0
                  ? state
                  :{...state,green:state.green+action.amount};
          case 'blue':
             return state.blue+action.amount>255||state.blue+action.amount<0
                  ? state
                  : {...state,blue:state.blue+action.amount};
          default:
               return state
     }
}


const SquareScreen=()=>{
    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
    const {red,green,blue}=state;
     return (
          <View>
               <ColourCounter
                    onIncrease={()=>{
                         dispatch({colourToChange:'red',amount:COLOUR_INCREMENT})
                    }}
                    onDecrease={()=> {
                         dispatch({colourToChange:'red',amount:-1*COLOUR_INCREMENT})
                    }}
                    colour={'Red'}
               />
               <ColourCounter
                    onIncrease={()=>{dispatch({colourToChange:'green',amount:COLOUR_INCREMENT})}}
                    onDecrease={()=>{dispatch({colourToChange:'green',amount:-1*COLOUR_INCREMENT})}}
                    colour={'Green'}
               />
               <ColourCounter
                    onIncrease={()=>{dispatch({colourToChange:'blue',amount:COLOUR_INCREMENT})}}
                    onDecrease={()=>{dispatch({colourToChange:'blue',amount:-1*COLOUR_INCREMENT})}}
                    colour={'Blue'}
               />
               <View
                    style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}>
               </View>
          </View>
     )
}

const style=StyleSheet.create({

})

export default SquareScreen;
