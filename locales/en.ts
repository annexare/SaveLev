export const en = {
  title: 'Save Lev with SMA',
  name: 'Lev Kotliarchyk',
  description:
    'At the age of 8.5 months, I was diagnosed with SMA. But I want to live, help me heal.',
  fundraisingTotal: 'Total funds raised',
  fundraisingDays: (days = 0): string => {
    const lastDigit: number = Number(`${days}`.split('').pop())
    return `in ${days} day${lastDigit === 1 ? '' : 's'}`
  },
  infoH1: 'Hi, my name is Lev and I was diagnosed with SMA',
  infoBody: [
    'Unfortunately, I was diagnosed with SMA when I was 8.5 months old.',
    'But with your help I will find a way to get well and live my healthy life.',
  ],
  infoGoal:
    'Currently, the fundraising is for Zolgensma (a gene therapy drug capable of stopping SMA), rehabilitation and recovery of physical skills and abilities after administration of the drug.',
  infoSMA1Title: 'What is SMA?',
  infoSMA1: [
    'SMA (Spinal Muscular Atrophy) is a genetic disease that atrophies muscles. Without treatment - DEADLY.',
    'As of today, there are the following drugs for SMA:',
    '1. Zolgensma is an injection that saves life and gives hope for recovering as close to a full life as possible.',
    '2. Risdiplam (Evrysdi) - supporting drops. They help me not to lose the strength and abilities that I already have while waiting for Zolgensma.',
    '3. Spinraza (Nusinersen) is also a maintenance injection.',
  ],
  infoSMA2Title: 'What are the funds for?',
  infoSMA2: [
    'All funds will go exclusively for treatment and what is critically necessary for it.',
    'In Ukraine, there is no free program from the state, as well as treatment for SMA.',
    'The cost of 1 injection of Zolgensma costs about $2.1 million (the exact amount in UAH depends on the exchange rates).',
    'We are also trying to get into a free treatment program for SMA abroad (in many EU countries, these drugs are registered and purchased at the expense of the state). If we are lucky in this and/or there are funds left after recovery, we will definitely send remaining balance to the treatment of other children with SMA in Ukraine.',
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
