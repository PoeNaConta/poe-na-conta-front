import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => {
    return sessionStorage.getItem('jwt') ? (
      <Navigate to="/home" />
    ) : (
      <Navigate to="/login" />
    );
  },
});
