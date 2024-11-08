import { Pressable, StyleSheet, Text } from "react-native";
import WalletAddIcon from "./SVGComponents/WalletAddIcon";
import { colors } from "@/constants/colors";
import { RootState } from "@/store/appStore";
import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

type NewPaymentButton = { dispatch: ThunkDispatch<{
  payment: RootState;
}, undefined, UnknownAction> & Dispatch<UnknownAction>,
handleNewPayment: () => void }

export default function NewPaymentButton({ dispatch, handleNewPayment }: NewPaymentButton) {

  return (
    <Pressable style={styles.newRequestBox} onPress={handleNewPayment}>
      <Text style={styles.title}>Nueva solicitud</Text>
      <WalletAddIcon height={20} width={20} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
})