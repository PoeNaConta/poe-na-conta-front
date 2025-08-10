import IconButton from '@components/icon-button';
import IconLink from '@components/icon-link';
import Modal from '@components/modal';
import Stack from '@components/stack';
import {
  PlusIcon,
  HomeIcon,
  DollarSignIcon,
  LayersIcon,
  // UserIcon,
  LogOutIcon,
  // SettingsIcon,
} from 'lucide-react';
import { useCallback, useState } from 'react';
import AddTransactionCard from '@components/add-transaction-card';
import './sidebar.css';
import { useNavigate } from '@tanstack/react-router';

export default function Sidebar() {
  const redirect = useNavigate();
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  const baseClass = 'lds--sidebar';

  const handleToggleAddTransaction = useCallback(() => {
    setIsAddTransactionOpen((previousIsOpen) => !previousIsOpen);
  }, []);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('jwt');
    redirect({ to: '/login' });
  }, []);

  return (
    <>
      <Modal isOpen={isAddTransactionOpen} onClose={handleToggleAddTransaction}>
        <AddTransactionCard handleCancel={handleToggleAddTransaction} />
      </Modal>

      <Stack
        as="aside"
        justify="between"
        paddingInline="md"
        paddingBlock="lg"
        className={baseClass}
      >
        <Stack space="sm" className={`${baseClass}__main-items`}>
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

        <Stack space="md" className={`${baseClass}__secondary-items`}>
          {/*
          <IconLink icon={<UserIcon />} to="/profile">
            Perfil
          </IconLink>
          */}

          <IconButton icon={<LogOutIcon />} onClick={handleLogout}>
            Sair
          </IconButton>
        </Stack>

        <Stack space="md" className={`${baseClass}__tertiary-items`}>
          {/*
          <IconLink icon={<SettingsIcon />} to="/profile">
            Config
          </IconLink>
          */}

          <IconButton icon={<LogOutIcon />} onClick={handleLogout}>
            Sair
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
