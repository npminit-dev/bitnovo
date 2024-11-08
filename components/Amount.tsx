import { colors } from "@/constants/colors";
import { RootState } from "@/store/appStore";
import { setAmount } from "@/store/slice";
import { formatLocaleCurrency } from "@/utils";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, useEffect, useRef } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { formatCurrency } from "react-native-format-currency";

type AmountProps = { dispatch: ThunkDispatch<{
  payment: RootState;
}, undefined, UnknownAction> & Dispatch<UnknownAction>, 
amount:string,
isoCurrency:string
}

export default function Amount({ amount, dispatch, isoCurrency }: AmountProps) {

  const symbol = useRef<string>(formatCurrency({ amount: parseInt(amount || '0'), code: isoCurrency })[2])

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={amount === '' ? '0.00 ' + symbol.current + ' ' : ''}
        placeholderTextColor={colors.SPECIAL_TEXT_SECONDARY}
        style={styles.input}
        keyboardType='numeric'
        textAlign="center"
        maxLength={10}
        value={amount}
        onChangeText={(text) => dispatch(setAmount(text))}
      />
      <Text style={styles.symbol}>
        {amount !== '' ? symbol.current : '' }
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

  symbol: {
    color: colors.SPECIAL_TEXT,
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    overflow: 'visible',
    width: 'auto',
  },

  input: {
    color: colors.SPECIAL_TEXT,
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    overflow: 'visible',
    width: 'auto'
  }
})