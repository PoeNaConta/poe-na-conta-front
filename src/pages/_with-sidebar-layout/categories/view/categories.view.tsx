import Button from '@components/button';
import CenterLayout from '@components/center-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import { PlusIcon } from 'lucide-react';
import CategoryRow from '../components/category-row';
import { CategoryProps } from '../types';
import Text from '@components/text';

export default function Categories({
  categories,
  searchValue,
  errorMessage,
  handleChangeSearch,
  handleAddCategory,
  handleRemoveCategory,
  handleEditCategory,
}: CategoryProps) {
  return (
    <CenterLayout title="Categorias" width={80} justify="start">
      <Stack fullWidth align="stretch" space="xxl">
        <Stack direction="row">
          <Input
            placeholder="buscar..."
            value={searchValue}
            onChange={handleChangeSearch}
          />
          <Button primary onClick={() => handleAddCategory(searchValue)}>
            <PlusIcon size={12} strokeWidth={4} /> ADICIONAR
          </Button>
        </Stack>

        {Boolean(errorMessage) && <Text>{errorMessage}</Text>}

        <Stack>
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              name={category.name}
              handleRemoveCategory={() => handleRemoveCategory(category.id)}
              handleEditCategory={() => handleEditCategory(category.id)}
            />
          ))}
        </Stack>
      </Stack>
    </CenterLayout>
  );
}
