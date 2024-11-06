import { colors } from "@/constants/colors";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import MoneyTimeIcon from "./SVGComponents/MoneyTimeIcon";
import Animated, { FadeIn } from "react-native-reanimated";

export default function ShareHeader() {
  return (
    <Animated.View style={styles.headerBox} entering={FadeIn.duration(400)}>
      <View style={styles.contentBox}>
        <MoneyTimeIcon height={70} width={70}/>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Solicitud de pago</Text>
          <Text style={styles.infoAmount}>56,00 €</Text>
        </View>
      </View>
      <Text style={styles.instructions}>Comparte el enlace de pago con el cliente</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  headerBox: {
    height: 114,
    width: '100%',
    marginVertical: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GRAY_BACKGROUND,
    borderRadius: 12
  },

  contentBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  infoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10
  },

  infoTitle: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    color: colors.SECONDARY_TEXT
  },

  infoAmount: {
    fontSize: 30,
    fontFamily: 'Mulish-Bold',
    lineHeight: 38,
    color: colors.PRIMARY_TEXT
  },

  instructions: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    lineHeight: 16,
    color: colors.SECONDARY_TEXT
  }
})