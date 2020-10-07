import React from "react";
import { Text, StyleSheet,View, Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title='Go to Components Demo'
      onPress={()=>props.navigation.navigate('Component')}
    ></Button>
    <Button
         title='Go to List Demo'
         onPress={()=>props.navigation.navigate('List')}
    ></Button>
    <Button
         title='Go to Image Demo'
         onPress={()=>props.navigation.navigate('Image')}
    ></Button>
    <Button
         title='Go to Counter Screen'
         onPress={()=>props.navigation.navigate('Counter')}
    ></Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
