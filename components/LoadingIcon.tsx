import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect } from "react"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated"

type LoadingIconProps = { size: number, color: string }

export default function LoadingIcon({ size, color }: LoadingIconProps) {

  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{
      rotateZ: rotation.value + 'deg'
    }]
  }))

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 500,
        easing: Easing.linear,
      }), -1
    );
  }, []);

  return (
    <Animated.View style={animatedStyle}>
      <AntDesign name="loading2" size={size} color={color} />
    </Animated.View>
  )
}