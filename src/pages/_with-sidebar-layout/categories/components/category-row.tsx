import Card from '@components/card';
import Text from '@components/text';
import Stack from '@components/stack';
import { PencilIcon, TrashIcon } from 'lucide-react';
import { CategoryRowProps } from '../types';

export default function CategoryRow({
  name,
  handleRemoveCategory,
  handleEditCategory,
}: CategoryRowProps) {
  return (
    <Stack direction="row" align="stretch" fullWidth space="sm">
      <Card
        padding="lg"
        radius="md"
        fullWidth
        style={{ userSelect: 'none', cursor: 'default' }}
      >
        <Text weight="medium" size="md">
          {name}
        </Text>
      </Card>

      <Card
        padding="lg"
        radius="md"
        onClick={handleRemoveCategory}
        style={{ userSelect: 'none', cursor: 'pointer' }}
      >
        <TrashIcon size={16} />
      </Card>

      <Card
        padding="lg"
        radius="md"
        onClick={handleEditCategory}
        style={{ userSelect: 'none', cursor: 'pointer' }}
      >
        <PencilIcon size={16} />
      </Card>
    </Stack>
  );
}
