import Svg, { Path } from "react-native-svg";
import { SVGComponentProps } from "./MoneyTimeIcon";

export default function ScanBarCode({ height, width }: SVGComponentProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path opacity="0.4" d="M1.66669 8.12496C1.32502 8.12496 1.04169 7.84163 1.04169 7.49996V5.41663C1.04169 2.99996 3.00835 1.04163 5.41669 1.04163H7.50002C7.84169 1.04163 8.12502 1.32496 8.12502 1.66663C8.12502 2.00829 7.84169 2.29163 7.50002 2.29163H5.41669C3.69169 2.29163 2.29169 3.69163 2.29169 5.41663V7.49996C2.29169 7.84163 2.00835 8.12496 1.66669 8.12496Z" fill="white" />
      <Path d="M18.3333 8.12496C17.9917 8.12496 17.7083 7.84163 17.7083 7.49996V5.41663C17.7083 3.69163 16.3083 2.29163 14.5833 2.29163H12.5C12.1583 2.29163 11.875 2.00829 11.875 1.66663C11.875 1.32496 12.1583 1.04163 12.5 1.04163H14.5833C16.9917 1.04163 18.9583 2.99996 18.9583 5.41663V7.49996C18.9583 7.84163 18.675 8.12496 18.3333 8.12496Z" fill="white" />
      <Path opacity="0.4" d="M14.5833 18.9584H13.3333C12.9916 18.9584 12.7083 18.675 12.7083 18.3334C12.7083 17.9917 12.9916 17.7084 13.3333 17.7084H14.5833C16.3083 17.7084 17.7083 16.3084 17.7083 14.5834V13.3334C17.7083 12.9917 17.9916 12.7084 18.3333 12.7084C18.675 12.7084 18.9583 12.9917 18.9583 13.3334V14.5834C18.9583 17 16.9916 18.9584 14.5833 18.9584Z" fill="white" />
      <Path d="M7.50002 18.9583H5.41669C3.00835 18.9583 1.04169 17 1.04169 14.5833V12.5C1.04169 12.1583 1.32502 11.875 1.66669 11.875C2.00835 11.875 2.29169 12.1583 2.29169 12.5V14.5833C2.29169 16.3083 3.69169 17.7083 5.41669 17.7083H7.50002C7.84169 17.7083 8.12502 17.9917 8.12502 18.3333C8.12502 18.675 7.84169 18.9583 7.50002 18.9583Z" fill="white" />
      <Path d="M7.5 4.375H5.83333C4.88333 4.375 4.375 4.875 4.375 5.83333V7.5C4.375 8.45833 4.88333 8.95833 5.83333 8.95833H7.5C8.45 8.95833 8.95833 8.45833 8.95833 7.5V5.83333C8.95833 4.875 8.45 4.375 7.5 4.375Z" fill="white" />
      <Path opacity="0.4" d="M14.1667 4.375H12.5C11.55 4.375 11.0417 4.875 11.0417 5.83333V7.5C11.0417 8.45833 11.55 8.95833 12.5 8.95833H14.1667C15.1167 8.95833 15.625 8.45833 15.625 7.5V5.83333C15.625 4.875 15.1167 4.375 14.1667 4.375Z" fill="white" />
      <Path opacity="0.4" d="M7.5 11.0416H5.83333C4.88333 11.0416 4.375 11.5416 4.375 12.5V14.1666C4.375 15.125 4.88333 15.625 5.83333 15.625H7.5C8.45 15.625 8.95833 15.125 8.95833 14.1666V12.5C8.95833 11.5416 8.45 11.0416 7.5 11.0416Z" fill="white" />
      <Path d="M14.1667 11.0416H12.5C11.55 11.0416 11.0417 11.5416 11.0417 12.5V14.1666C11.0417 15.125 11.55 15.625 12.5 15.625H14.1667C15.1167 15.625 15.625 15.125 15.625 14.1666V12.5C15.625 11.5416 15.1167 11.0416 14.1667 11.0416Z" fill="white" />
    </Svg>

  )
}