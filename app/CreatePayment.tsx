import Amount from "@/components/Amount";
import Concept from "@/components/Concept";
import Header from "@/components/Header";
import MainButton from "@/components/MainButton";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePayment() {

  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  return (
    <View style={styles.screenBox}>
      <Header rightTag="USD" title="Importe a pagar" rightBtnCB={() => router.navigate('/SelectCurrency')}/>
      <KeyboardAvoidingView style={styles.bodyBox}>
        <Amount amount={amount} setAmount={setAmount}/>
        <Concept descripction={description} setDescripction={setDescription}/>
        <MainButton text="Continuar" action={() => router.navigate('/SelectCurrency')}/>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenBox: {
    flex: 1
  },

  bodyBox: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})