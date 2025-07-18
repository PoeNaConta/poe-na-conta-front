import IconButton from '@components/icon-button';
import IconLink from '@components/icon-link';
import Modal from '@components/modal';
import Stack from '@components/stack';
import {
  PlusIcon,
  HomeIcon,
  DollarSignIcon,
  LayersIcon,
  UserIcon,
  LogOutIcon,
} from 'lucide-react';
import { useCallback, useState } from 'react';
import AddTransactionCard from '@components/add-transaction-card';

export default function Sidebar() {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  const handleToggleAddTransaction = useCallback(() => {
    setIsAddTransactionOpen((previousIsOpen) => !previousIsOpen);
  }, []);

  return (
    <>
      <Modal isOpen={isAddTransactionOpen} onClose={handleToggleAddTransaction}>
        <AddTransactionCard handleCancel={handleToggleAddTransaction} />
      </Modal>

      <Stack justify="between" paddingInline="md" paddingBlock="lg">
        <Stack space="sm">
          <IconButton
            primary
            icon={<PlusIcon />}
            onClick={handleToggleAddTransaction}
          >
            Adicionar Transação
          </IconButton>

          <IconLink icon={<HomeIcon />} to="/">
            Home
          </IconLink>

          <IconLink icon={<DollarSignIcon />} to="/transactions">
            Transações
          </IconLink>

          <IconLink icon={<LayersIcon />} to="/categories">
            Categorias
          </IconLink>
        </Stack>

        <Stack space="md">
          <IconLink icon={<UserIcon />} to="/profile">
            Perfil
          </IconLink>

          <IconButton icon={<LogOutIcon />}>Sair</IconButton>
        </Stack>
      </Stack>
    </>
  );
}
