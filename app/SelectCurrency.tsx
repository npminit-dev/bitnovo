import ListCard from "@/components/ListCard";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { router } from "expo-router";
import { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import { CURRENCIES } from "@/constants/data";

export default function SelectCurrency() {

  const [search, setSearch] = useState<string>('')

  return (
    <View style={styles.viewBox}>
      <Header title="Selecciona una divisa" backArrow backCB={() => router.navigate('/CreatePayment')}/>
      <KeyboardAvoidingView style={styles.bodyBox}>
        <SearchBar value={search} setValue={setSearch}/>
        <ScrollView style={styles.currencyList}>
        {
          CURRENCIES.map((currency, i) => {
            return <ListCard
              key={uuid()}
              title={currency.currencyName}
              subtitle={currency.ISOCode}
              img={currency.img}
              appearDelay={(i+1) * 40} 
            />
          })
        }
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
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

