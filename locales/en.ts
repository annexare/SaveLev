export const en = {
  title: 'Save Lev with SMA',
  name: 'Lev Kotliarchyk',
  description:
    'At the age of 8.5 months, I was diagnosed with SMA. But I want to live, help me heal.',
  fundraisingTotal: 'Total funds for Zolgensma',
  fundraisingDays: (days = 0): string => {
    const lastDigit: number = Number(`${days}`.split('').pop())
    return `in ${days} day${lastDigit === 1 ? '' : 's'}`
  },
  infoH1: 'Hi, my name is Lev and I was diagnosed with SMA',
  infoBody: [
    'Unfortunately, I was diagnosed with SMA when I was 8.5 months old.',
    'But with your help I will find a way to get well and live my healthy life.',
  ],
  ibanPaymentDetails: 'IBAN & Details',
  monoBanka: 'Monobank Jar',
  monoDonate: 'Donate',
  paymentDetails: 'Fundraising',
  socialDad: "My dad's",
  socialMom: "My mom's",
  socialMy: 'My',
  socialNetworks: 'Social networks',
  socialNetworksInfo: 'You can fing my photos, videos and all updates here:',
  thankYou: 'Thank you very much!',
  zolgensmaPrice: 'Approximate price for Zolgensma is $2.1M.',

  actionClose: 'Close',
  actionLanguage: 'Language',
} as const

export type TranslationKeys = keyof typeof en
export type Translation = Record<TranslationKeys, any>
