import { apiUrl, defaultHeaders } from './defaultHeaders';
export class TickerFetcher {
  static async getTickerPrice(symbol) {
    const response = await fetch(`${apiUrl}/stocks/${symbol}/price`, {
      method: 'GET',
      headers: defaultHeaders()
    });
    const data = await response.json();
    return data;
  }
}
