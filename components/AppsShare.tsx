import { Pressable, Share, StyleSheet, Text } from "react-native";
import ExportIcon from "./SVGComponents/ExportIcon";
import { colors } from "@/constants/colors";

type AppShareProps = { paymentGateway:string|null }

export default function AppsShare({ paymentGateway }: AppShareProps) {

  const handleShareWithApps = async (url:string) => {
    await Share.share({
      title: 'Comparte tu enlace de pago con otras aplicaciones',
      message: url,
    })
  }

  return (
    <Pressable style={styles.shareBox} onPress={() => handleShareWithApps(paymentGateway as string)}>
      <ExportIcon height={20} width={20} />
      <Text style={styles.shareText}>Compartir con otras aplicaciones</Text>
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