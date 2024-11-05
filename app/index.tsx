import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloworld}>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  helloworld: {
    fontSize: 30,
    fontFamily: 'Inter-Regular',
    color: Colors.EMPHASIS
  }
})