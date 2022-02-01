import * as React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface propTypes {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get("window");
const SIZE = width * 0.75;
const Page: React.FC<propTypes> = ({index, title, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          scale,
        },
      ],
      borderRadius,
    };
  });
  const rTextStyle = useAnimatedStyle(() => {
    const transY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          translateY: transY,
        },
      ],
      opacity: interpolate(
        translateX.value,
        inputRange,
        [-2, 1, -2],
        Extrapolate.CLAMP,
      ),
    };
  });
  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{position: "absolute"}, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};
export {Page};
const styles = StyleSheet.create({
  pageContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0,0,256,0.5)",
  },
  text: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
