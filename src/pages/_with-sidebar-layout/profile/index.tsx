import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_with-sidebar-layout/profile/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /_with-sidebar-layout/profile/!</div>;
}
