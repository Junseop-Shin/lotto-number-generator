import { useCallback, useEffect, useState } from "react";
import { Typography } from "./Typography";
import { View, Animated } from "react-native";

export const LottoNumberView = (props) => {
  const [viewHeight, setViewHeight] = useState(0);
  const [animatedValue] = useState(new Animated.Value(1));
  const getNumberBackgroundColor = useCallback((number) => {
    if (number < 10) {
      return "orange";
    } else if (number < 20) {
      return "blue";
    } else if (number < 30) {
      return "red";
    } else if (number < 40) {
      return "gray";
    } else {
      return "green";
    }
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHeight, 0],
  });

  useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
    }).start();
  }, [props.numbers]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
      onLayout={({ nativeEvent }) => {
        setViewHeight(nativeEvent.layout.height);
      }}
    >
      {props.numbers.map((item) => {
        return (
          <Animated.View
            style={{
              backgroundColor: getNumberBackgroundColor(item),
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              transform: [
                {
                  translateY,
                },
              ],
            }}
          >
            <Typography fontSize={20} color="white">
              {item}
            </Typography>
          </Animated.View>
        );
      })}
    </View>
  );
};
