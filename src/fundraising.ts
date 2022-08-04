import { TCurrency, TForeignCurrency } from './types'

export const fundraisingGoalUSD = 2100000
export const fundraisingStartDate = '2022-07-21'

export interface IFundraisingStatus {
  Cash: Record<TCurrency, number>
  MonoJarUAH: number
  PayPalUSD: number
  Privat: Record<TCurrency, number>
  NBU: Record<TForeignCurrency, number>
}

export const fundraisingStatus: IFundraisingStatus = {
  Cash: {
     UAH: 516052.50,
     USD: 0,
     EUR: 0,
   },
   MonoJarUAH: 984598.40,
   PayPalUSD: 6346.99,
   Privat: {
     UAH: 2821978.00,
     USD: 1580,
     EUR: 1306,
   },
  NBU: {
    EUR: 37.25,
    USD: 36.6,
  },
}

const { Cash, MonoJarUAH, NBU, PayPalUSD, Privat } = fundraisingStatus

const numberToFixed = (value: number): number => Number(Number(value).toFixed(1))

export const usdToEur = NBU.USD / NBU.EUR

export const fundraisingGoals: Record<TCurrency, number> = {
  UAH: numberToFixed(fundraisingGoalUSD * NBU.USD),
  EUR: numberToFixed(fundraisingGoalUSD * usdToEur),
  USD: fundraisingGoalUSD,
}

export const fundraisingTotals: Record<TCurrency, number> = {
  UAH: Cash.UAH + MonoJarUAH + Privat.UAH,
  USD: Cash.USD + PayPalUSD + Privat.USD,
  EUR: Cash.EUR + Privat.EUR,
}

export const totalInUAH = numberToFixed(
  fundraisingTotals.EUR * NBU.EUR + fundraisingTotals.UAH + fundraisingTotals.USD * NBU.USD,
)
