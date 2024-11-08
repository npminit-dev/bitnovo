import { router } from "expo-router";
import { View, Text, Pressable, StyleSheet, ToastAndroid } from "react-native";
import ScanBarCode from "./SVGComponents/ScanBarCode";
import LinkIcon from "./SVGComponents/LinkIcon";
import { colors } from "@/constants/colors";
import * as Clipboard from 'expo-clipboard'

type QRShareProps = { paymentGateway:string }

export default function QRShare({ paymentGateway }: QRShareProps) {

  const handleCopyClipboard = async () => {
    await Clipboard.setStringAsync(paymentGateway);
    ToastAndroid.showWithGravityAndOffset('URL copiada al portapapeles', 3500, 0, 0, 400)
  }

  return (
    <View style={styles.qrShareBox}>
      <Pressable style={{ ...styles.shareBox, flex: 1 }} onPress={() => handleCopyClipboard()}>
        <LinkIcon height={20} width={20} />
        <Text style={styles.shareText}>{paymentGateway}</Text>
      </Pressable>
      <Pressable style={styles.qrShareButton} onPress={() => router.navigate('/ScanQRCode')}>
        <ScanBarCode height={20} width={20} />
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
})