import Header from "@/components/Header";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import ListCard from "@/components/ListCard";
import { v4 as uuid } from "uuid";
import { COUNTRIES } from "@/constants/data";

export default function SelectCountryCode() {

  const [countryCode, setCountryCode] = useState<string>('Argentina');

  return (
    <View style={styles.mainBox}>
      <Header title="Seleccionar país" backArrow backCB={() => router.navigate('/SharePayment')} />
      <View style={styles.contentBox}>
        <SearchBar value={countryCode} setValue={setCountryCode} />
        <ScrollView style={styles.countryList}>
          {
            COUNTRIES.map((country, i) => {
              return (
                <ListCard
                  title={country.code}
                  subtitle={country.name}
                  img={country.img || ''}
                  key={uuid()}
                  appearDelay={(i+1) * 40}
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