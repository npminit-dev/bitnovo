import { Pressable, Text,StyleSheet, Linking } from "react-native";
import SmsIcon from "./SVGComponents/SmsIcon";
import { colors } from "@/constants/colors";

type EmailShareProps = { paymentIdentifier:string|null, paymentGateway:string|null }

export default function EmailShare({ paymentGateway, paymentIdentifier }: EmailShareProps) {

  const handleSendMail = async(subject:string, link:string) => {
    await Linking.openURL(`mailto:support@example.com?subject=Bitnovo payment id: ${subject}&body=Payment link: ${link}`)
  }

  return (
    <Pressable style={styles.shareBox} onPress={() => handleSendMail(paymentIdentifier as string, paymentGateway as string)}>
      <SmsIcon height={20} width={20} />
      <Text style={styles.shareText}>Enviar por correo electrónico</Text>
    </Pressable>
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
})

