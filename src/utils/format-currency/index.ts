export function formatCurrency(value: string) {
  return `R$ ${value.replace(/[^0-9.,-]/g, '')}`;
}
