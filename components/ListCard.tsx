import { Image, StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from "@/constants/colors";
import Animated, { FadeInLeft } from "react-native-reanimated";

type ListCardProps = { title:string, subtitle:string, img:string, appearDelay?:number }

export default function ListCard({ title, subtitle, img, appearDelay }: ListCardProps) {
  return (
    <Animated.View style={styles.mainBox} entering={FadeInLeft.delay(appearDelay || 0)}>
      <Image source={img as ImageSourcePropType} style={styles.image}/>
      <View style={styles.contentBox}>
        <View style={styles.dataBox}>
          <Text style={styles.name}>{ title }</Text>
          <Text style={styles.symbol}>{ subtitle }</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color={colors.SECONDARY_TEXT} />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  mainBox: {
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