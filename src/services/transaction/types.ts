export interface Transaction {
  id?: number;
  client_id?: number;
  category_id: number;
  balance: string;
  title: string;
  description?: string;
  createdat?: string;
}
