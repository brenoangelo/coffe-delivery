import { Bank, CreditCard, Money } from "phosphor-react";


export const METHOD_INFO = {
  credit: {
    title: 'Cartão de crédito',
    icon: <CreditCard size={16}/>,
  },
  debit: {
    title: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  cash: {
    title: 'Dinheiro',
    icon: <Money size={16} />,
  },
};