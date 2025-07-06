import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from '@tanstack/react-router';

export const Route = createFileRoute('/_with-sidebar-layout')({
  beforeLoad: () => {
    if (!sessionStorage.getItem('jwt')) throw redirect({ to: '/login' });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/"></Link>
      Oia só, tamo na home
      <Outlet />
    </div>
  );
}
