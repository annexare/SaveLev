export enum ESocialLinks {
  instagram = 'https://instagram.com/save.lev.sma',
  instagramMom = 'https://instagram.com/maryklimenko',
  instagramDad = 'https://instagram.com/nikolaykotlyarchick',
  telegram = '',
}

interface ICreditCard {
  number: string
  currency: 'EUR' | 'UAH' | 'USD'
  iban: string
  details: string[]
}

export const creditCards: ICreditCard[] = [
  { number: '4149629359490810', currency: 'UAH', iban: '', details: [] },
  { number: '4149629359489705', currency: 'EUR', iban: '', details: [] },
  { number: '4149629359487469', currency: 'USD', iban: '', details: [] },
]

export const paypalEmail = 'olivia.ua@gmail.com'
