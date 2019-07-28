import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class TickerFetcher {
  static async getTickerPrice(symbol) {
    const response = await fetch(`${apiUrl}/stocks/${symbol}/price`, {
      method: 'GET',
      headers: defaultHeaders()
    });
    const data = await response.json();
    return data;
  }
}
