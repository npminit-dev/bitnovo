import { colors } from "@/constants/colors";
import { AppDispatch, RootState } from "@/store/appStore";
import { setAmount } from "@/store/slice";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction, useEffect } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import { useDispatch, useSelector } from "react-redux";

type AmountProps = { dispatch: ThunkDispatch<{
  payment: RootState;
}, undefined, UnknownAction> & Dispatch<UnknownAction>, 
amount:string,
isoCurrency:string
}

export default function Amount({ amount, dispatch, isoCurrency }: AmountProps) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.SPECIAL_TEXT_SECONDARY}
        placeholder={amount === '' ? '0.00 '.concat(formatCurrency({ amount: parseInt(amount), code: isoCurrency })[2]) + ' ' : undefined}
        cursorColor={colors.SPECIAL_TEXT}
        keyboardType='numeric'
        textAlign="center"
        maxLength={10}
        value={amount}
        onChangeText={(text) => dispatch(setAmount(text))}
      />
      <Text style={styles.currencySymbol}>
        {
          amount !== '' ?
          formatCurrency({ amount: parseInt(amount), code: isoCurrency })[2] : ''
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },

  input: {
    color: colors.SPECIAL_TEXT,
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    overflow: 'visible',
    width: 'auto'
  },

  currencySymbol: {
    color: colors.SPECIAL_TEXT,
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    minWidth: 5
  }
})