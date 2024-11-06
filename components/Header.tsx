import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/constants/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

type HeaderProps = { backArrow?: boolean, title?: string, rightTag?: string, backCB?:() => void, rightBtnCB?: () => void }

export default function Header({ backArrow, title, rightTag, backCB, rightBtnCB }: HeaderProps) {
  return (
    <View style={styles.headerbox}>
      <Pressable style={{...styles.backArrowBox, opacity: backArrow ? 1 : 0}} onPress={backCB}>
        <AntDesign name="arrowleft" size={17} color={colors.PRIMARY_TEXT} />
      </Pressable> 
      <Text style={{...styles.title, opacity: title ? 1 : 0}}>{title || '...'}</Text>
      <Pressable style={{...styles.rightButtonBox, opacity: rightTag ? 1 : 0}} onPress={rightBtnCB}>
        <Text style={styles.rightButtonTag}>{rightTag}</Text>
        <Entypo name="chevron-small-down" size={20} color={colors.PRIMARY_TEXT} />
      </Pressable> 
    </View>
  )
}

const styles = StyleSheet.create({
  headerbox: {
    height: 56,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  backArrowBox: {
    height: 28,
    width: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADERBTN_BACKGROUND,
    borderRadius: 100,
  },

  title: {
    color: colors.PRIMARY_TEXT,
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    lineHeight: 22,
    marginLeft: '5%'
  },

  rightButtonBox: {
    width: 70,
    height: 28,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADERBTN_BACKGROUND,
    borderRadius: 100,
  },

  rightButtonTag: {
    color: colors.PRIMARY_TEXT
  }
})