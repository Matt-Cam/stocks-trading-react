import { apiUrl, defaultHeaders } from './defaultHeaders';

export default class TransactionsFetcher {
    static async getTransactions() {
        const response = await fetch(`${apiUrl}/transactions`, {
            method: "GET",
            headers: defaultHeaders()
        });
        const data = await response.json();
        return data;
    }
}
