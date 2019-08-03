import { apiUrl, defaultHeaders } from '../defaultHeaders';

export default class AllocationsFetcher {
  static async getAllocations() {
    const response = await fetch(`${apiUrl}/userdata/allocations`, {
      method: 'GET',
      headers: defaultHeaders()
    });
    const data = await response.json();
    return data;
  }
}
