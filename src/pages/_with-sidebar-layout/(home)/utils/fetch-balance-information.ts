import {
  fetchDebtsBalance,
  fetchGainsBalance,
  fetchTotalBalance,
  fetchDebtCategories,
} from '@services/balance';
import { fetchDebtsAndGains } from '@utils/fetch-debts-and-gains';

export async function fetchBalanceInformation() {
  try {
    const [
      totalBalance,
      gainsBalance,
      debtsBalance,
      { debts, gains, transactions },
      categoriesDebts,
    ] = await Promise.all([
      fetchTotalBalance(),
      fetchGainsBalance(),
      fetchDebtsBalance(),
      fetchDebtsAndGains(),
      fetchDebtCategories(),
    ]);

    return {
      totalBalance,
      gainsBalance,
      debtsBalance,
      debts,
      gains,
      transactions,
      categoriesDebts,
    };
  } catch (error) {
    console.error('Error fetching balance information:', error);
    throw error;
  }
}
