import Svg, { Path } from "react-native-svg"

export type SVGComponentProps = { height: number, width: number }

export default function MoneyTimeIcon({ height, width }: SVGComponentProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 59 58" fill="none">
      <Path d="M12.5834 33.8334C7.24258 33.8334 2.91675 38.1592 2.91675 43.5C2.91675 48.8409 7.24258 53.1667 12.5834 53.1667C17.9242 53.1667 22.2501 48.8409 22.2501 43.5C22.2501 38.1592 17.9242 33.8334 12.5834 33.8334ZM15.0001 42.7267C15.0001 44.2009 14.2026 45.6025 12.946 46.3517L11.1093 47.4634C10.8193 47.6326 10.5051 47.7292 10.1909 47.7292C9.58677 47.7292 8.98257 47.4151 8.64424 46.8592C8.13674 46.0134 8.40259 44.8775 9.27259 44.37L11.1093 43.2584C11.2785 43.1618 11.3993 42.9442 11.3993 42.7509V40.5034C11.3993 39.5126 12.2209 38.6909 13.2118 38.6909C14.2026 38.6909 15.0243 39.5126 15.0243 40.5034V42.7267H15.0001Z" fill="#035AC5" />
      <Path opacity="0.4" d="M53.6666 21.75V36.25C53.6666 44.7083 48.8333 48.3333 41.5833 48.3333H20.9208C21.7666 46.9075 22.2499 45.2641 22.2499 43.5C22.2499 38.1591 17.9241 33.8333 12.5833 33.8333C9.68325 33.8333 7.09742 35.1141 5.33325 37.1199V21.75C5.33325 13.2916 10.1666 9.66663 17.4166 9.66663H41.5833C48.8333 9.66663 53.6666 13.2916 53.6666 21.75Z" fill="#035AC5" />
      <Path d="M29.4999 35.0417C32.8366 35.0417 35.5416 32.3368 35.5416 29C35.5416 25.6633 32.8366 22.9584 29.4999 22.9584C26.1632 22.9584 23.4583 25.6633 23.4583 29C23.4583 32.3368 26.1632 35.0417 29.4999 35.0417Z" fill="#035AC5" />
      <Path d="M45.2083 35.6458C44.2174 35.6458 43.3958 34.8241 43.3958 33.8333V24.1666C43.3958 23.1758 44.2174 22.3541 45.2083 22.3541C46.1991 22.3541 47.0208 23.1758 47.0208 24.1666V33.8333C47.0208 34.8241 46.1991 35.6458 45.2083 35.6458Z" fill="#035AC5" />
    </Svg>
  )
}