import { getLocales, getCalendars } from 'expo-localization';

export const sleep = (ms: number) => {
  return new Promise(res => setTimeout(() => res(null) ,ms))
}

export const formatLocaleCurrency = (amount:string, symbol:string) => 
  new Intl.NumberFormat(getLocales()[0].languageTag || 'es', { style: 'currency', currency: symbol })
    .format(parseInt(amount))
