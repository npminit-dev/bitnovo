import { colors } from "@/constants/colors";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type AmountProps = { amount:string, setAmount: Dispatch<SetStateAction<string>> }

export default function Amount({ amount, setAmount }: AmountProps) {

  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.SPECIAL_TEXT_SECONDARY}
      placeholder="$ 0.00"
      cursorColor={colors.SPECIAL_TEXT}
      keyboardType='numeric'
      textAlign="center"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    color: colors.SPECIAL_TEXT,
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    width: '100%'
  }
})