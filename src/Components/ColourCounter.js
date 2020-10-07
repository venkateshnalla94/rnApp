import React, { useState } from "react";
import {
     Text,
     StyleSheet,
     View,
     Button,
     TouchableOpacity,
     FlatList
} from "react-native";

const ColourCounter=({colour,onIncrease,onDecrease})=>{
     return (
          <View>
               <Text>{colour}</Text>
               <Button onPress={()=>onIncrease()} title={`Increase ${colour}`}/>
               <Button onPress={()=>onDecrease()} title={`Decrease ${colour}`}/>
          </View>
     )
}

const style=StyleSheet.create({

})

export default ColourCounter;
