import { colors } from "@/constants/colors";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = { disabled?: boolean, text?: string, action?: () => void }

export default function MainButton({ disabled, text, action, children }: ButtonProps & PropsWithChildren) {
  return (
    <Pressable
      style={{ ...{ ...styles.buttonBox, backgroundColor: disabled ? colors.DISABLED_BACKGROUND : colors.SPECIAL_TEXT } }}
      onPress={action}
      disabled={disabled}
    >
      {
        text !== undefined ?
          <Text style={{ ...styles.text, color: disabled ? colors.DISABLED_TEXT : colors.MAIN_BACKGROUND }}>{text}</Text> :
          children
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    zIndex: 1000
  },

  text: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
  },
})