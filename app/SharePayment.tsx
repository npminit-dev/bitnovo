import ShareHeader from "@/components/ShareHeader";
import ExportIcon from "@/components/SVGComponents/ExportIcon";
import LinkIcon from "@/components/SVGComponents/LinkIcon";
import ScanBarCode from "@/components/SVGComponents/ScanBarCode";
import SmsIcon from "@/components/SVGComponents/SmsIcon";
import WalletAddIcon from "@/components/SVGComponents/WalletAddIcon";
import WhatsAppIcon from "@/components/SVGComponents/WhatsAppIcon";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import Animated, { FadeInDown } from "react-native-reanimated";
import { useState } from "react";
import WhatsAppConfirmModal from "@/components/WhatsappConfirmModal";

export default function SharePayment() {

  const [phoneNumber, setPhoneNumber] = useState<string>('200 5869 75423')
  const [countryCode, setCountryCode] = useState<string>('+240')
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <View style={styles.mainBox}>
      <View style={styles.contentBox}>
        <ShareHeader />
        <Animated.View entering={FadeInDown.duration(400)}>
          <View style={styles.qrShareBox}>
            <View style={{...styles.shareBox, flex: 1}}>
              <LinkIcon height={20} width={20} />
              <Text style={styles.shareText}>pay.bitnovo.com/59f9g9</Text>
            </View>
            <Pressable style={styles.qrShareButton}>
              <ScanBarCode height={20} width={20} />
            </Pressable>
          </View>
          <View style={styles.shareBox}>
            <SmsIcon height={20} width={20} />
            <Text style={styles.shareText}>Enviar por correo electrónico</Text>
          </View>
          <View style={{...styles.shareBox, justifyContent: 'space-between'}}>
            <View style={{...styles.shareBox, borderWidth: 0, paddingHorizontal: 0}}>
              <WhatsAppIcon height={20} width={20}/>
              <Pressable onPress={() => router.navigate('/SelectCountryCode')} style={styles.countryCodeButton}>
                <Text style={styles.shareText}>{countryCode}</Text>
                <Entypo name="chevron-small-down" size={24} color={colors.PRIMARY_TEXT} />
              </Pressable>
              <TextInput 
                value={phoneNumber}
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
                style={{...styles.shareText, marginLeft: 8}}
              />
            </View>
            <Pressable style={styles.sendButton}>
              <Text onPress={() => setModalOpen(true)} style={styles.sendButtonText}>Enviar</Text>
            </Pressable>
          </View>
          <View style={styles.shareBox}>
            <ExportIcon height={20} width={20} />
            <Text style={styles.shareText}>Compartir con otras aplicaciones</Text>
          </View>
        </Animated.View>
      </View>
      <Pressable style={styles.newRequestBox} onPress={() => router.navigate('/CreatePayment')}>
        <Text style={styles.title}>Nueva solicitud</Text>
        <WalletAddIcon height={20} width={20} />
      </Pressable>
      <WhatsAppConfirmModal open={modalOpen} setOpen={setModalOpen}/>
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