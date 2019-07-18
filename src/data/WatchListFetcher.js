import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class WatchListFetcher {
    static async getWatchlist() {
        const response = await fetch(`${apiUrl}/userdata/watchlist`, {
            method: "GET",
            headers: defaultHeaders()
        });
        const data = await response.json();
        return data;
    }
}
