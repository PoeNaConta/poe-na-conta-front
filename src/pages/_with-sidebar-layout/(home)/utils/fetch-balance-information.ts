import {
  fetchDebtsBalance,
  fetchGainsBalance,
  fetchTotalBalance,
  //   fetchBalanceCategories,
} from '@services/balance';
import { fetchDebtsAndGains } from '@utils/fetch-debts-and-gains';

export async function fetchBalanceInformation() {
  try {
    const [
      totalBalance,
      gainsBalance,
      debtsBalance,
      { debts, gains, transactions },
      //   balanceCategories,
    ] = await Promise.all([
      fetchTotalBalance(),
      fetchGainsBalance(),
      fetchDebtsBalance(),
      fetchDebtsAndGains(),
      //   fetchBalanceCategories(),
    ]);

    return {
      totalBalance,
      gainsBalance,
      debtsBalance,
      debts,
      gains,
      transactions,
      balanceCategories: [], // Placeholder for balance categories, can be uncommented when implemented
    };
  } catch (error) {
    console.error('Error fetching balance information:', error);
    throw error;
  }
}
