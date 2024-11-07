import Header from "@/components/Header";
import SuccessModal from "@/components/SuccessModal";
import InfoIcon from "@/components/SVGComponents/InfoIcon";
import { colors } from "@/constants/colors";
import useWebSocket from "@/hooks/useWebSocket";
import { AppDispatch, RootState } from "@/store/appStore";
import { resetState } from "@/store/slice";
import { formatLocaleCurrency } from "@/utils";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

export default function ScanQRCode() {

  const dispatch = useDispatch<AppDispatch>();
  const amount = useSelector((state: RootState) => state.payment.amount)
  const paymentGateway = useSelector((state: RootState) => state.payment.paymentGateway)
  const isoCurrency = useSelector((state: RootState) => state.payment.isoCurrency)
  const paymentIdentifier = useSelector((state: RootState) => state.payment.paymentIdentifier)
  const paid = useWebSocket(paymentIdentifier as string)

  const handleNewPayment = () => {
    dispatch(resetState())
    router.navigate('/CreatePayment')
  }

  return (
    <Animated.ScrollView style={styles.mainBox} entering={FadeInLeft}>
      <View style={styles.headerBox}>
        <Header backArrow backCB={() => router.navigate('/SharePayment')} />
      </View>
      <View style={styles.contentBox}>
        <View style={styles.infoBox}>
          <View style={styles.iconBox}>
            <InfoIcon height={25} width={25} />
          </View>
          <Text style={styles.info}>
            Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
          </Text>
        </View>
        {
          paymentGateway !== null ?
            <View style={styles.qrBox}>
              <QRCode
                color={colors.PRIMARY_TEXT}
                value={paymentGateway}
                size={300}
                logo={require('../assets/images/BPay3.png')}
                logoSize={73}
                logoMargin={8}
                ecl="M"
              />
            </View> : null 
        }
        <Text style={styles.amount}>{formatLocaleCurrency(amount,isoCurrency)}</Text>
        <Text style={styles.note}>Esta pantalla se actualizará automáticamente.</Text> 
      </View>
      <SuccessModal open={paid} handleClose={handleNewPayment} title="Pago confirmado" message="Tu pago ha sido registrado con éxito, serás dirigido a la página principal"/>
    </Animated.ScrollView>
  )

}

const styles = StyleSheet.create({
  mainBox: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.SPECIAL_TEXT
  },

  headerBox: {
    backgroundColor: colors.MAIN_BACKGROUND
  },

  contentBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 18,
    backgroundColor: colors.SPECIAL_TEXT
  },

  qrBox: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    padding: 16,
    backgroundColor: colors.MAIN_BACKGROUND,
    borderRadius: 6,
  },

  infoBox: {
    width: '100%',
    height: 60,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.DISABLED_BACKGROUND,
    borderRadius: 6
  },

  info: {
    flex: 1,
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
    color: colors.PRIMARY_TEXT,
  },

  iconBox: {
    marginRight: 12
  },

  amount: {
    marginVertical: 10,
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    color: colors.MAIN_BACKGROUND,
  },

  note: {
    marginTop: 16,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: colors.MAIN_BACKGROUND
  }

  
})