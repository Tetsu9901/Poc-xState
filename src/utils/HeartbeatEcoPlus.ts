class HeartbeatEcoPlus {
  static INTERVAL = 500;

  private counter = 0;
  private intervalId = 0;

  public start() {
    this.intervalId = window.setInterval(() => {
      this.counter += HeartbeatEcoPlus.INTERVAL / 1000;

      console.log(`Elapsed time : ${this.counter}s`);
    }, HeartbeatEcoPlus.INTERVAL);
  }

  public stop() {
    window.clearInterval(this.intervalId);
  }

  public end() {}
}

export default new HeartbeatEcoPlus();
