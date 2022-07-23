export const en = {
  title: 'Save Lev with SMA',
  description: 'At the age of 8.5 months, I was diagnosed with SMA. But I want to live, help me heal.',
  infoH1: 'Hi, my name is Lev and I was diagnosed with SMA',
} as const

export type TranslationKeys = keyof typeof en
export type Translation = Record<TranslationKeys, any>
