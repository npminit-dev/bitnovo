import { FontSource } from "expo-font";

export const FONTMAPPINGDATA: Record<string, FontSource> = {
'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-BlackItalic': require('../assets/fonts/Inter-BlackItalic.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-BoldItalic': require('../assets/fonts/Inter-BoldItalic.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraBoldItalic': require('../assets/fonts/Inter-ExtraBoldItalic.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-LightItalic': require('../assets/fonts/Inter-LightItalic.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('../assets/fonts/Inter-MediumItalic.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-ThinItalic': require('../assets/fonts/Inter-ThinItalic.ttf'),
    'Mulish-Black': require('../assets/fonts/Mulish-Black.ttf'),
    'Mulish-BlackItalic': require('../assets/fonts/Mulish-BlackItalic.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
    'Mulish-BoldItalic': require('../assets/fonts/Mulish-BoldItalic.ttf'),
    'Mulish-ExtraBold': require('../assets/fonts/Mulish-ExtraBold.ttf'),
    'Mulish-ExtraBoldItalic': require('../assets/fonts/Mulish-ExtraBoldItalic.ttf'),
    'Mulish-ExtraLight': require('../assets/fonts/Mulish-ExtraLight.ttf'),
    'Mulish-ExtraLightItalic': require('../assets/fonts/Mulish-ExtraLightItalic.ttf'),
    'Mulish-Italic': require('../assets/fonts/Mulish-Italic.ttf'),
    'Mulish-Light': require('../assets/fonts/Mulish-Light.ttf'),
    'Mulish-LightItalic': require('../assets/fonts/Mulish-LightItalic.ttf'),
    'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
    'Mulish-MediumItalic': require('../assets/fonts/Mulish-MediumItalic.ttf'),
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-SemiBoldItalic': require('../assets/fonts/Mulish-SemiBoldItalic.ttf'),
}

export const REQUEST_HEADERS = {
  get_currency: {
    "X-Device-Id": process.env.EXPO_PUBLIC_X_DEVICE_ID as string,
    "Content-Type": 'application/json'
  }
}

export type Country = { name:string, code:string, img:string }

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
  }
]

export type Currency = { currencyName:string, ISOCode:string, img:string }

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