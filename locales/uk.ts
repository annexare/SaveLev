import type { Translation } from './en'

export const uk: Translation = {
  title: 'Врятуємо Лева з СМА',
  name: 'Лев Котлярчик',
  description:
    'У віці 8.5 місяців у мене діагностували СМА. Але я хочу жити, допоможіть мені вилікуватись.',
  fundraisingTotal: 'Всього зібрано на Zolgensma',
  fundraisingDays: (days: number): string => {
    const lastDigit: number = Number(`${days}`.split('').pop())
    let plural = 'днів'

    if (lastDigit === 1) {
      plural = 'день'
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      plural = 'дні'
    }

    return `за ${days} ${plural}`
  },
  infoH1: 'Привіт, мене звати Лев і мені діагностували СМА',
  infoBody: [
    'Нажаль, у мене діагностували СМА коли мені було 8.5 місяців.',
    'Але з вашою допомогою я зможу одужати і прожити повноцінне життя.',
  ],
  ibanPaymentDetails: 'IBAN та реквізити',
  monoBanka: 'Банка Monobank',
  monoDonate: 'Поповнити банку',
  paymentDetails: 'Збір коштів',
  socialDad: 'Мій тато в',
  socialMom: 'Моя мама в',
  socialMy: 'Мій',
  socialNetworks: 'Соціальні мережі',
  socialNetworksInfo: 'Ви можете знайти мої фото, відео та всі оновлення тут:',
  thankYou: 'Щиро дякуємо вам!',
  zolgensmaPrice: 'Приблизна вартість Zolgensma — 2.1 мільйони доларів США.',

  actionClose: 'Закрити',
  actionLanguage: 'Мова',
} as const
