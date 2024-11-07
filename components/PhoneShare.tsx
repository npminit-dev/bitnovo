import { Pressable, View, Text, TextInput, StyleSheet, Linking } from "react-native";
import WhatsAppIcon from "./SVGComponents/WhatsAppIcon";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/appStore";
import { setPhoneNumber } from "@/store/slice";
import { useState } from "react";

type PhoneShareProps = {
  phoneCode: string, phoneNumber: string, dispatch: ThunkDispatch<{
    payment: RootState;
  }, undefined, UnknownAction> & Dispatch<UnknownAction>,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  paymentGateway: string | null
}

export default function PhoneShare({ phoneCode, phoneNumber, paymentGateway, setModalOpen, dispatch }: PhoneShareProps) {

  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleSendWhatsapp = async (message: string, phone: string) => {
    await Linking.openURL(`whatsapp://send?text=${message}&phone=${phone}`)
    setModalOpen(true)
  }

  return (
    <View style={{ ...styles.shareBox, justifyContent: 'space-between', ...(isFocus ? styles.focused : {}) }}>
      <View style={{ ...styles.shareBox, borderWidth: 0, paddingHorizontal: 0 }}>
        <WhatsAppIcon height={20} width={20} />
        <Pressable onPress={() => router.navigate('/SelectCountryCode')} style={styles.countryCodeButton}>
          <Text style={styles.shareText}>{phoneCode}</Text>
          <Entypo name="chevron-small-down" size={24} color={colors.PRIMARY_TEXT} />
        </Pressable>
        <TextInput
          value={phoneNumber}
          keyboardType="numeric"
          textContentType="telephoneNumber"
          onChangeText={(text) => dispatch(setPhoneNumber(text))}
          style={{ ...styles.shareText, marginLeft: 8 }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </View>
      <Pressable style={styles.sendButton} onPress={() => handleSendWhatsapp(paymentGateway as string, phoneCode.concat(phoneNumber))}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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

  focused: {
    borderColor: colors.SPECIAL_TEXT
  },

  shareText: {
    marginLeft: 16,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    color: colors.PRIMARY_TEXT
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