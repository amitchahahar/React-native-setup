/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

const words = ["what's", "up", "Mobile", "dev", "is", "Awesome"];
import React from "react";
import {StyleSheet, Text} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import {Page} from "./components/page";
// eslint-disable-next-line import/no-default-export
export default function App() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      style={styles.container}
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      {words.map((word, i) => (
        <Page
          title={word}
          index={i}
          key={i.toString()}
          translateX={translateX}
        />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
