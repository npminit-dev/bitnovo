import Amount from "@/components/Amount";
import Concept from "@/components/Concept";
import Header from "@/components/Header";
import MainButton from "@/components/MainButton";
import { AppDispatch, RootState } from "@/store/appStore";
import { createPayment } from "@/store/slice";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "@/constants/colors";
import LoadingIcon from "@/components/LoadingIcon";

export default function CreatePayment() {

  const amount = useSelector((state: RootState) => state.payment.amount);
  const isoCurrency = useSelector((state: RootState) => state.payment.isoCurrency);
  const description = useSelector((state: RootState) => state.payment.paymentConcept)
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const areInputsInvalids = () => amount === '' ||Number.isNaN(Number(amount)) || isoCurrency === '' || description === ''
  
  const handleCreateOrder = async () => {
    setIsLoading(true)
    let result = await dispatch(createPayment())
    if (result.meta.requestStatus === 'fulfilled') {
      setIsLoading(false)
      router.navigate('/SharePayment')
    } else setIsLoading(false)
  }

  return (
    <Animated.View style={styles.screenBox} entering={FadeIn}>
      <Header rightTag={isoCurrency} title="Importe a pagar" rightBtnCB={() => router.navigate('/SelectCurrency')}/>
      <KeyboardAvoidingView style={styles.bodyBox}>
        <Amount amount={amount} dispatch={dispatch} isoCurrency={isoCurrency}/>
        <Concept descripction={description} dispatch={dispatch}/>
        <MainButton 
          text={!isLoading ? "Continuar" : undefined}
          action={handleCreateOrder} 
          disabled={areInputsInvalids()}
          children={
            isLoading ? 
            <LoadingIcon color={colors.MAIN_BACKGROUND} size={20}/> : null
          }
        />
      </KeyboardAvoidingView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  screenBox: {
    flex: 1,
  },

  bodyBox: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.GRAYBORDER
  }
})