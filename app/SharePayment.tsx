import ShareHeader from "@/components/ShareHeader";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useEffect, useState } from "react";
import SuccessModal from "@/components/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/appStore";
import { resetState } from "@/store/slice";
import useWebSocket from "@/hooks/useWebSocket";
import QRShare from "@/components/QRShare";
import PhoneShare from "@/components/PhoneShare";
import EmailShare from "@/components/EmailShare";
import AppsShare from "@/components/AppsShare";
import NewPaymentButton from "@/components/NewPaymentButton";

export default function SharePayment() {

  const dispatch = useDispatch<AppDispatch>();
  const { 
    isoCurrency, 
    phoneNumber, 
    phoneCode, 
    amount, 
    paymentGateway, 
    paymentIdentifier 
  } = useSelector((state: RootState) => state.payment);

  const paid = useWebSocket(paymentIdentifier as string)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleNewPayment = () => {
    dispatch(resetState())
    router.navigate('/CreatePayment')
  }

  return (
    <View style={styles.mainBox}>
      <View style={styles.contentBox}>
        <ShareHeader amount={amount} isoCode={isoCurrency}/>
        <Animated.View entering={FadeInDown.duration(400)}>
          <QRShare paymentGateway={paymentGateway as string}/>
          <EmailShare paymentGateway={paymentGateway} paymentIdentifier={paymentIdentifier}/>
          <PhoneShare {...{ phoneCode, phoneNumber, paymentGateway, setModalOpen, dispatch }}/>
          <AppsShare paymentGateway={paymentGateway}/>
        </Animated.View>
      </View>
      <NewPaymentButton dispatch={dispatch} handleNewPayment={handleNewPayment}/>
      <SuccessModal 
        open={modalOpen} 
        handleClose={() => setModalOpen(false)} 
        title="Solicitud enviada" 
        message="Tu solicitud de pago enviada ha sido enviado con éxito por WhatsApp ."
      />
      <SuccessModal 
        open={paid} 
        handleClose={handleNewPayment} 
        title="Pago confirmado" 
        message="Tu pago ha sido registrado con éxito, serás dirigido a la página principal"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainBox: {
    position: 'relative',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  contentBox: {
    width: '100%'
  },

  newRequestBox: {
    width: '100%',
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GRAY_BACKGROUND,
    borderRadius: 6
  },

  title: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    lineHeight: 16,
    marginRight: 10,
    color: colors.SPECIAL_TEXT
  },

  shareBox: {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginVertical: 6,
    borderRadius: 6,
    borderColor: colors.GRAYBORDER,
    borderWidth: 1,
  },

  shareText: {
    marginLeft: 16,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    color: colors.PRIMARY_TEXT
  },

  qrShareBox: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row' 
  },

  qrShareButton: {
    height: 56,
    width: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    borderRadius: 6,
    backgroundColor: colors.SPECIAL_TEXT,
  },

  countryCodeButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  sendButton: {
    height: 24,
    width: 53,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: colors.SPECIAL_TEXT,
  },

  sendButtonText: {
    fontSize: 12,
    fontFamily: 'Mulish-Bold',
    color: colors.MAIN_BACKGROUND
  }
})