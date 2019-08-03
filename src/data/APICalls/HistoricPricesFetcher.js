import { apiUrl, defaultHeaders } from '../defaultHeaders';

export default class HistoricPricesFetcher {
  static async getHistoricPrices(symbol, timePeriod) {
    const response = await fetch(
      `${apiUrl}/stocks/${symbol}/price/${timePeriod}`,
      {
        method: 'GET',
        headers: defaultHeaders()
      }
    );
    const data = await response.json();
    return data;
  }
}
