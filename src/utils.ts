export const formatCreditCard = (cardNumber: string): string => {
  let formatted = ''

  for (let i = 0; i < cardNumber.length; i++) {
    formatted += cardNumber[i]

    if (formatted && (i + 1) % 4 === 0) {
      formatted += ' '
    }
  }

  return formatted
}
