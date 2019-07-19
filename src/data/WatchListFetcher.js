import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class WatchlistFetcher {
  static async getWatchlist() {
    const response = await fetch(`${apiUrl}/userdata/watchlist`, {
      method: 'GET',
      headers: defaultHeaders()
    });
    const data = await response.json();
    return data;
  }

  static async addWatchlist(stock){

    const response = await fetch(`${apiUrl}/userdata/watchlist`, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify({symbol: stock.symbol, action: 'ADD'})
    });
    const data = await response.json();
    return data;

  }
  //http://demomocktradingserver.azurewebsites.net/userdata/watchlist
 // {userid: 'matthew.cameron'}
}
