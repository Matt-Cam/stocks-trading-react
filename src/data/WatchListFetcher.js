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

  static async changeWatchlist(stock, action){
    const symbol = stock.hasOwnProperty('symbol') ? stock.symbol : stock

    const response = await fetch(`${apiUrl}/userdata/watchlist`, {
      method: 'POST',
      headers: defaultHeaders(),
      body: JSON.stringify({symbol: symbol, action: action})
    });
    const data = await response.json();
    return data;

  }
  //http://demomocktradingserver.azurewebsites.net/userdata/watchlist
 // {userid: 'matthew.cameron'}
}
