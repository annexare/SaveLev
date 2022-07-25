import { TCurrency, TForeignCurrency } from './types'

export const fundraisingGoalUSD = 2100000

export interface IFundraisingStatus {
  MonoJar: number
  PayPal: number
  Privat: Record<TCurrency, number>
  NBU: Record<TForeignCurrency, number>
}

export const fundraisingStatus: IFundraisingStatus = {
  MonoJar: 722248.7,
  PayPal: 4634.48,
  Privat: {
    UAH: 1768452,
    USD: 35,
    EUR: 438,
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

export const fundraisingStartDate = new Date('2022-07-21 09:00')

export const fundraisingGoals: Record<TCurrency, number> = {
  UAH: numberToFixed(fundraisingGoalUSD * NBU.USD),
  EUR: numberToFixed(fundraisingGoalUSD * usdToEur),
  USD: fundraisingGoalUSD,
}
