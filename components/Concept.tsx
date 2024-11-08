import { colors } from "@/constants/colors";
import { RootState } from "@/store/appStore";
import { setPaymentConcept } from "@/store/slice";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


type ConceptProps = {
  descripction: string, dispatch: ThunkDispatch<{
    payment: RootState;
  }, undefined, UnknownAction> & Dispatch<UnknownAction>
}

export default function Concept({ descripction, dispatch }: ConceptProps) {

  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <View style={styles.conceptBox}>
      <Text style={styles.label}>Concepto</Text>
      <TextInput
        style={{...styles.input, ...(isFocus ? styles.inputFocused : {})}}
        placeholder={'Añade descripción del pago'}
        placeholderTextColor={colors.SECONDARY_TEXT}
        textAlignVertical="center"
        maxLength={140}
        multiline
        value={descripction}
        onChangeText={(text) => dispatch(setPaymentConcept(text))}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <View style={styles.charLimitBox}>
        <Text style={styles.charLimit}>{descripction.length}/140 caracteres</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conceptBox: {
    height: 80,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  label: {
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
    lineHeight: 20,
    letterSpacing: 1,
    color: colors.PRIMARY_TEXT,
    paddingBottom: 2
  },

  input: {
    width: '100%',
    height: 56,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    color: colors.PRIMARY_TEXT,
    borderWidth: 1,
    borderColor: colors.GRAYBORDER,
    borderRadius: 6
  },

  inputFocused: {
    borderColor: colors.SPECIAL_TEXT
  },

  charLimitBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end'
  },

  charLimit: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    color: colors.SECONDARY_TEXT
  }
})