"use strict";

// Telemetry & remote logging disabled for SERU GUARD
class ServerLogger {
  container = new DataContainer('logEvents', []);
  async sendToServer(events) {
    // No-op for privacy
  }
  async prepareAndSend() {
    // No-op for privacy
  }
  logError(error, context, skipReport = false) {
    if (debug && typeof debug.error === 'function') {
      debug.error(`[SERU GUARD Error] ${context}:`, error);
    }
  }
  logInfo(info, context) {
    if (debug && typeof debug.log === 'function') {
      debug.log(`[SERU GUARD Info] ${context}:`, info);
    }
  }
}
const serverLogger = new ServerLogger();
