import Header from "@/components/Header";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import ListCard from "@/components/ListCard";
import { v4 as uuid } from "uuid";
import { COUNTRIES } from "@/constants/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/appStore";
import { setPhoneCode } from "@/store/slice";

export default function SelectCountryCode() {

  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (code:string) => {
    dispatch(setPhoneCode(code))
    router.navigate('/SharePayment')
  }

  return (
    <View style={styles.mainBox}>
      <Header title="Seleccionar país" backArrow backCB={() => router.navigate('/SharePayment')} />
      <View style={styles.contentBox}>
        <SearchBar value={search} setValue={setSearch} />
        <ScrollView style={styles.countryList}>
          {
            search === '' ?
            COUNTRIES.map((country, i) => {
              return (
                <ListCard
                  title={country.code}
                  subtitle={country.name}
                  img={country.img || ''}
                  key={uuid()}
                  action={() => handleSelect(country.code)}
                />
              )
            }) :
            COUNTRIES.filter(country => new RegExp(`${search}`, 'gi').test(country.name)).map((country, i) => {
              return (
                <ListCard
                  title={country.code}
                  subtitle={country.name}
                  img={country.img || ''}
                  key={uuid()}
                  action={() => handleSelect(country.code)}
                />
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainBox: {
    height: '100%',
    width: '100%'
  },

  contentBox: {
    paddingHorizontal: 16,
    flex: 1
  },

  countryList: {
    flex: 1,
    marginTop: 10,
  }
})