import { PropsWithChildren } from 'react';
import './card.css';

export default function Card({ children }: PropsWithChildren) {
  const base = 'lds--card';
  const className = `${base}`;

  return <div className={className}>{children}</div>;
}
