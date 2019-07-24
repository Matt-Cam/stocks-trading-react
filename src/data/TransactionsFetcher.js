import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class TransactionsFetcher {
  static async getTransactions() {
    const response = await fetch(`${apiUrl}/transactions`, {
      method: 'GET',
      headers: defaultHeaders()
    });
    const data = await response.json();
    return data;
  }

  /*body parameter expecting Object of this form 
  { 
    "symbol": "string",
    "side": "BUY",
    "amount": 0 
  }
  */
  static async makeTransaction(body) {
    const response = await fetch(`${apiUrl}/transactions`, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }
}
