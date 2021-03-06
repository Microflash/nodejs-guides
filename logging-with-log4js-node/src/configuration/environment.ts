export const environment = {
  nodeEnv: process.env.ENV || process.env.NODE_ENV,
  logDir: process.env.LOG_DIR || 'logs',
  logLevel: process.env.LOG_LEVEL || 'info',
  logFile: process.env.LOG_FILE || 'app.log',
  requestLogFile: process.env.MORGAN_LOG || 'requests.log',
  requestLogFormat: process.env.MORGAN_LOG_FMT || '[:date[iso]] :method :url :status :response-time ms - :res[content-length]',
  requestLogRollingInterval: process.env.MORGAN_LOG_ROLLING_INTERVAL || '1d'
}