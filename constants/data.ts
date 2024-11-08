import { FontSource } from "expo-font";

export const FONTMAPPINGDATA: Record<string, FontSource> = {
  'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
  'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
  'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
  'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
}

export const REQUEST_HEADERS = {
  get_currency: {
    "X-Device-Id": process.env.EXPO_PUBLIC_X_DEVICE_ID as string,
    "Content-Type": 'application/json'
  },
  post_order: {
    headers: {
      "X-Device-Id": process.env.EXPO_PUBLIC_X_DEVICE_ID as string,
      "Content-Type": 'multipart/form-data'
    },
    method: 'POST'
  }
}

export type Country = { name: string, code: string, img: string }

export const COUNTRIES: Array<Country> = [
  {
    name: 'España',
    code: '+34',
    img: require('../assets/images/flags/spain.png')
  },
  {
    name: 'Equatorial Guinea',
    code: '+240',
    img: require('../assets/images/flags/equatorial-guinea.png')
  },
  {
    name: 'Grecia',
    code: '+30',
    img: require('../assets/images/flags/greece.png')
  },
  {
    name: 'South Georgia and the S...',
    code: '+500',
    img: require('../assets/images/flags/united-kingdom.png')
  },
  {
    name: 'Guatemala',
    code: '+502',
    img: require('../assets/images/flags/guatemala.png')
  },
  {
    name: 'Guyana',
    code: '+594',
    img: require('../assets/images/flags/guyana.png')
  },
  {
    name: 'Hong Kong',
    code: '+852',
    img: require('../assets/images/flags/hong-kong.png')
  },
  {
    name: 'Honduras',
    code: '+504',
    img: require('../assets/images/flags/honduras.png')
  },
  {
    name: 'Argentina',
    code: '+54',
    img: require('../assets/images/flags/argentina.png')
  }
]

export type Currency = { currencyName: string, ISOCode: string, img: string }

export const CURRENCIES: Array<Currency> = [
  {
    currencyName: 'Euro',
    ISOCode: 'EUR',
    img: require('../assets/images/currencies/european-union.png')
  },
  {
    currencyName: 'Dólar Estadounidense',
    ISOCode: 'USD',
    img: require('../assets/images/currencies/usa.png')
  },
  {
    currencyName: 'Libra Esterlina',
    ISOCode: 'GBP',
    img: require('../assets/images/flags/united-kingdom.png')
  }
]