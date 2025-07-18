import { useState } from 'react';

export function useTransactionForm() {
  const [transactionData, setTransactionData] = useState({
    title: '',
    balance: '',
    newCategory: '',
    description: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const formattedValue =
      name === 'balance' ? `R$ ${value.replace(/[^0-9.,-]/g, '')}` : value;
    setTransactionData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  return {
    transactionData,
    handleInputChange,
  };
}
