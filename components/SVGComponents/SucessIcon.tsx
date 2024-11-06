import Svg, { Path } from "react-native-svg";
import { SVGComponentProps } from "./MoneyTimeIcon";

export default function SuccessIcon({ height, width }: SVGComponentProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Path opacity="0.4" d="M40 73.3333C58.4095 73.3333 73.3333 58.4095 73.3333 40C73.3333 21.5905 58.4095 6.66663 40 6.66663C21.5905 6.66663 6.66666 21.5905 6.66666 40C6.66666 58.4095 21.5905 73.3333 40 73.3333Z" fill="#1ED6EB" />
      <Path d="M35.2667 51.9333C34.6 51.9333 33.9667 51.6666 33.5 51.2L24.0667 41.7666C23.1 40.8 23.1 39.2 24.0667 38.2333C25.0333 37.2666 26.6333 37.2666 27.6 38.2333L35.2667 45.9L52.4 28.7666C53.3667 27.8 54.9667 27.8 55.9333 28.7666C56.9 29.7333 56.9 31.3333 55.9333 32.3L37.0333 51.2C36.5667 51.6666 35.9333 51.9333 35.2667 51.9333Z" fill="#1ED6EB" />
    </Svg>
  )
}