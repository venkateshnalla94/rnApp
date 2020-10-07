import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";

const randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

const ColourScreen = () => {
  const [colours, setColours] = useState([]);

  return (
    <View>
      <Button
        title={"Add Colour to the screen"}
        onPress={() => {
          setColours([...colours, randomRGB()]);
        }}
      />
      <FlatList
        data={colours}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColourScreen;
