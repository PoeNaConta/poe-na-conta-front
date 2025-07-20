import { SelectOption } from '@components/select/types';
import { Transaction } from '@services/transaction/types';
import { formatCurrency } from '@utils/format-currency';
import { useCallback, useState } from 'react';

export function useTransactionForm(
  initialData: Transaction | undefined,
  selectedCategory: SelectOption | undefined,
  addCategory: (name: string) => Promise<number>,
  handleClose: () => void,
) {
  const [isLoading, setIsLoading] = useState(false);

  const [transactionData, setTransactionData] = useState({
    title: initialData?.title || '',
    balance: initialData?.balance ? formatCurrency(initialData?.balance) : '',
    newCategory: '',
    description: initialData?.description || '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const formattedValue = name === 'balance' ? formatCurrency(value) : value;
    setTransactionData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleSubmitWrapper = useCallback(
    async (
      event: React.FormEvent,
      submitCallback: (transactionData: Transaction) => Promise<void>,
    ) => {
      event.preventDefault();

      const { title, balance, newCategory, description } = transactionData;

      if (selectedCategory?.value === 'add_category' && !newCategory) {
        alert('Por favor, insira o nome da nova categoria.');
        return;
      }

      try {
        setIsLoading(true);
        const categoryId =
          selectedCategory?.value === 'add_category'
            ? await addCategory(newCategory)
            : Number(selectedCategory?.value);

        const transaction = {
          title,
          balance: balance.replace('R$ ', '').replace(',', '.').trim(),
          category_id: categoryId,
          description,
        };

        await submitCallback(transaction);

        handleClose();
      } catch (error) {
        console.error('Erro ao criar transação:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategory, transactionData, addCategory, handleClose, setIsLoading],
  );

  return {
    isLoading,
    transactionData,
    handleInputChange,
    handleSubmitWrapper,
  };
}
