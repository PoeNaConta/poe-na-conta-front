import CenterLayout from '@components/center-layout';
import { LoaderCircleIcon } from 'lucide-react';
import './loading-page.css';

export default function LoadingPage() {
  return (
    <CenterLayout>
      <LoaderCircleIcon className="lds--loading-page--spinner" />
    </CenterLayout>
  );
}
