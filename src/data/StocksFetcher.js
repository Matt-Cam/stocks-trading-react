import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class StocksFetcher {
    static async getStocks() {
        const response = await fetch(`${apiUrl}/stocks`, {
            method: "GET",
            headers: defaultHeaders()
        });
        const data = await response.json();
        return data;
    }
}