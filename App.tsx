/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

const words = ["what's", "up", "Mobile", "development", "is", "awesome"];
import React from "react";
import {StyleSheet, Text} from "react-native";
import Animated from "react-native-reanimated";
// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <Animated.ScrollView style={styles.container}>
      {words.map((word, i) => (
        <Text key={i} style={styles.text}>
          {word}
        </Text>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  text: {
    fontSize: 30,
  },
});
