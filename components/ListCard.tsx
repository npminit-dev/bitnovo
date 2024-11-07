import { Image, StyleSheet, View, Text, ImageSourcePropType, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from "@/constants/colors";
import Animated, { FadeIn } from "react-native-reanimated";

type ListCardProps = { title:string, subtitle:string, img:string, appearDelay?:number, action?:() => void }

export default function ListCard({ title, subtitle, img, appearDelay, action }: ListCardProps) {
  return (
    <Animated.View entering={FadeIn.delay(appearDelay || 0)}>
      <Pressable style={styles.pressableBox} onPress={action}>
        <Image source={img as ImageSourcePropType} style={styles.image}/>
        <View style={styles.contentBox}>
          <View style={styles.dataBox}>
            <Text style={styles.name}>{ title }</Text>
            <Text style={styles.symbol}>{ subtitle }</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color={colors.SECONDARY_TEXT} />
        </View>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  pressableBox: {
    height: 52,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 3,
    borderRadius: 6
  },

  image: {
    height: 32,
    width: 32,
    marginRight: 10,
    borderRadius: 100
  },

  contentBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  dataBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },

  name: {
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
    lineHeight: 20,
    color: colors.PRIMARY_TEXT
  },

  symbol: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    lineHeight: 16,
    color: colors.SECONDARY_TEXT
  }
})