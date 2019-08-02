const nes = require('nes');
export class ConnectTicker {
  nesClient;
  static async connect() {
    if (!this.nesClient) {
      this.nesClient = new nes.Client(
        'wss://demomocktradingserver.azurewebsites.net'
      );
      await this.nesClient.connect();
    }
    return this.nesClient;
  }
}
