import Text from '@components/text';
import Card from '@components/card';
import Input from '@components/input';
import Select from '@components/select';
import ButtonLayout from '@components/button-layout';
import Button from '@components/button';
import Stack from '@components/stack';
import { useCategoriesOptions } from './use-categories-options.hook';
import { useEffect } from 'react';
import { useTransactionForm } from './use-transaction-form.hook';
import { createTransaction } from '@services/transaction';
import { AddTransactionCardProps } from './types';

export default function AddTransactionCard({
  handleCancel: handleClose,
  handleSubmit = createTransaction,
  initialData,
  buttonText = { default: 'Adicionar', loading: 'Adicionando...' },
  title = 'Adicionar nova movimentação',
}: AddTransactionCardProps) {
  const {
    categoriesOptions,
    selectedCategory,
    handleOptionSelected,
    fetchCategoriesData,
    addCategory,
  } = useCategoriesOptions();

  const { isLoading, transactionData, handleInputChange, handleSubmitWrapper } =
    useTransactionForm(initialData, selectedCategory, addCategory, handleClose);

  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData]);

  return (
    <Card
      form
      onSubmit={(event: React.FormEvent) =>
        handleSubmitWrapper(event, handleSubmit)
      }
    >
      <Stack align="stretch" space="lg" paddingBottom="lg">
        <Text as="h3" weight="bold" size="lg">
          {title}
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
            {isLoading ? buttonText.loading : buttonText.default}
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
