import Text from '@components/text';
import Card from '@components/card';
import Input from '@components/input';
import Select from '@components/select';
import ButtonLayout from '@components/button-layout';
import Button from '@components/button';
import Stack from '@components/stack';
import { useCategoriesOptions } from './use-categories-options.hook';
import { useCallback, useEffect, useState } from 'react';
import { useTransactionForm } from './use-transaction-form.hook';
import { createTransaction } from '@services/transaction';

export default function AddTransactionCard({
  handleCancel: handleClose,
}: {
  handleCancel: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    categoriesOptions,
    selectedCategory,
    handleOptionSelected,
    fetchCategoriesData,
    addCategory,
  } = useCategoriesOptions();

  const { transactionData, handleInputChange } = useTransactionForm();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
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
            : selectedCategory?.value;

        const transaction = {
          title,
          balance: balance.replace('R$ ', '').replace(',', '.').trim(),
          category_id: categoryId,
          description,
        };

        await createTransaction(transaction);

        handleClose();
      } catch (error) {
        console.error('Erro ao criar transação:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [transactionData, selectedCategory, addCategory],
  );

  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData]);

  return (
    <Card form onSubmit={handleSubmit}>
      <Stack align="stretch" space="lg" paddingBottom="lg">
        <Text as="h3" weight="bold" size="lg">
          Adicionar nova movimentação
        </Text>

        <Input
          label="Título"
          name="title"
          placeholder="Meu salário"
          onChange={handleInputChange}
          value={transactionData.title}
        />

        <Input
          label="Valor"
          name="balance"
          placeholder="R$ 0,00"
          onChange={handleInputChange}
          value={transactionData.balance}
        />

        <Select
          label="Categoria"
          placeholder="Selecione"
          options={categoriesOptions}
          onOptionSelected={handleOptionSelected}
        />

        {selectedCategory?.value === 'add_category' && (
          <Input
            label="Nova Categoria"
            name="newCategory"
            placeholder="Digite o nome da nova categoria"
            onChange={handleInputChange}
            value={transactionData.newCategory}
          />
        )}

        <Input
          label="Descrição"
          name="description"
          placeholder="Salário referente..."
          onChange={handleInputChange}
          value={transactionData.description}
        />
      </Stack>

      <ButtonLayout
        primaryButton={
          <Button primary type="submit" disabled={isLoading}>
            {isLoading ? 'Adicionando...' : 'Adicionar'}
          </Button>
        }
        secondaryButton={
          <Button secondary onClick={handleClose}>
            Cancelar
          </Button>
        }
      />
    </Card>
  );
}
