import ListCard from "@/components/ListCard";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import { CURRENCIES } from "@/constants/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/appStore";
import { setIsoCurrency } from "@/store/slice";
import Animated, { FadeInLeft } from "react-native-reanimated";

export default function SelectCurrency() {

  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectCurrency = (ISOCode:string) => {
    dispatch(setIsoCurrency(ISOCode))
    router.back()
  }

  return (
    <Animated.View style={styles.viewBox} entering={FadeInLeft}>
      <Header title="Selecciona una divisa" backArrow backCB={() => router.navigate('/CreatePayment')}/>
      <KeyboardAvoidingView style={styles.bodyBox}>
        <SearchBar value={search} setValue={setSearch}/>
        <ScrollView style={styles.currencyList}>
        {
          search === '' ?
          CURRENCIES.map((currency, i) => {
            return <ListCard
              key={uuid()}
              title={currency.currencyName}
              subtitle={currency.ISOCode}
              img={currency.img}
              action={() => handleSelectCurrency(currency.ISOCode)}
            />
          }) :
          CURRENCIES.filter(country => new RegExp(`${search}`, 'gi').test(country.currencyName)).map((country, i) => {
            return (
              <ListCard
                title={country.currencyName}
                subtitle={country.ISOCode}
                img={country.img || ''}
                key={uuid()}
                action={() => handleSelectCurrency(country.ISOCode)}
              />
            )
          })
        }
        </ScrollView>
      </KeyboardAvoidingView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1
  },

  bodyBox: {
    flex: 1,
    paddingHorizontal: 16
  },

  currencyList: {
    marginVertical: 10,
    flex: 1
  }

})

