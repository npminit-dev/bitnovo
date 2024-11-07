import { colors } from "@/constants/colors";
import { BlurView } from "expo-blur";
import { Modal, View, Text, StyleSheet } from "react-native";
import MainButton from "./MainButton";
import SuccessIcon from "./SVGComponents/SucessIcon";

type SuccessModalProps = { open:boolean, handleClose:() => void, title:string, message:string }

export default function SuccessModal({ open, handleClose, title, message }: SuccessModalProps) {
  return (
    <Modal 
      visible={open} 
      animationType="fade"
      onRequestClose={handleClose}
      transparent={true}
      style={styles.modal}
    >
      <BlurView 
        style={styles.blurBackground} 
        experimentalBlurMethod="dimezisBlurView" 
        intensity={10} 
        blurReductionFactor={30}
      />
      <View style={styles.modalBoxWrapper}>
      <View style={styles.blurTint} onTouchStart={handleClose}/>
        <View style={styles.modalBox}>
          <SuccessIcon height={80} width={80}/>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <MainButton text="Entendido" action={handleClose}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    height: '100%',
    width: '100%',
    zIndex: 100
  },

  blurBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },

  blurTint: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.PRIMARY_TEXT,
    opacity: .3
  },

  modalBoxWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  modalBox: {
    width: 354,
    height: 413,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 15,
    padding: 16,
    paddingBottom: 50,
    backgroundColor: colors.MAIN_BACKGROUND,
    borderRadius: 24,
  },

  modalTitle: {
    fontSize: 26,
    fontFamily: 'Mulish-Bold',
    color: colors.PRIMARY_TEXT,
    marginVertical: 27
  },

  modalMessage: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    marginBottom: 28,
    color: colors.SECONDARY_TEXT,
    textAlign: 'center'
  }
})

