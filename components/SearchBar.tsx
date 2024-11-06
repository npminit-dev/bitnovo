import { colors } from "@/constants/colors";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

type SearchProps = { value:string, setValue:Dispatch<SetStateAction<string>> }

export default function SearchBar({ value, setValue }: SearchProps) {
  return (
    <View style={styles.searchBox}>
      <Feather name="search" size={24} color={colors.SECONDARY_TEXT} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor={colors.SECONDARY_TEXT}
        cursorColor={colors.SPECIAL_TEXT}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.GRAYBORDER,
  },

  searchIcon: {
    marginHorizontal: 10
  },

  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
    color: colors.PRIMARY_TEXT
  }

})