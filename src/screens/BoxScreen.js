import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
     return (
          <View style={styles.viewStyle}>
               <View style={styles.textStyle1}></View>
               <View style={styles.textStyle2}></View>
               <View style={styles.textStyle3}></View>
          </View>
     );
};

const styles = StyleSheet.create({
     viewStyle: {
          borderWidth: 3,
          borderColor: 'black',
          height:200,
          flexDirection:"row",
          justifyContent:'space-between'
     },
     textStyle1:{
         
          backgroundColor:'red',
          height: 100,
          width:100
     },
     textStyle2:{
          
          backgroundColor:'green',
          height: 100,
          width:100,
          top:95
     },
     textStyle3:{
         
          backgroundColor:"blue",
          height: 100,
          width:100
     }
});

export default BoxScreen;
