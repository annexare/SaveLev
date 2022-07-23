export const en = {
  title: 'Save Lev with SMA',
  description:
    'At the age of 8.5 months, I was diagnosed with SMA. But I want to live, help me heal.',
  infoH1: 'Hi, my name is Lev and I was diagnosed with SMA',
  infoBody: [
    'Unfortunately, I was diagnosed with SMA when I was 8.5 months old.',
    'But with your help I will find a way to get well and live my healthy life.',
  ],
  ibanPaymentDetails: 'IBAN & Details',
  monoBanka: 'Monobank Jar',
  monoDonate: 'Donate',
} as const

export type TranslationKeys = keyof typeof en
export type Translation = Record<TranslationKeys, any>
