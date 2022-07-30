import { TCurrency, TForeignCurrency } from './types'

export const fundraisingGoalUSD = 2100000
export const fundraisingStartDate = '2022-07-21'

export interface IFundraisingStatus {
  MonoJar: number
  PayPal: number
  Privat: Record<TCurrency, number>
  NBU: Record<TForeignCurrency, number>
}

export const fundraisingStatus: IFundraisingStatus = {
  MonoJar: 919818.61,
  PayPal: 5841.58,
  Privat: {
    UAH: 2979845.50,
    USD: 580,
    EUR: 922,
  },
  NBU: {
    EUR: 37.25,
    USD: 36.6,
  },
}

const { MonoJar, NBU, PayPal, Privat } = fundraisingStatus

const numberToFixed = (value: number): number => Number(Number(value).toFixed(1))

export const usdToEur = NBU.USD / NBU.EUR

export const totalInUAH = numberToFixed(
  MonoJar + PayPal * NBU.USD + Privat.UAH + Privat.EUR * NBU.EUR + Privat.USD * NBU.USD,
)

export const fundraisingGoals: Record<TCurrency, number> = {
  UAH: numberToFixed(fundraisingGoalUSD * NBU.USD),
  EUR: numberToFixed(fundraisingGoalUSD * usdToEur),
  USD: fundraisingGoalUSD,
}
