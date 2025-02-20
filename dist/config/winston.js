'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
   return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require('winston'));
const { combine, timestamp, printf, colorize } = winston_1.default.format;
const logFormat = printf(({ level, message, timestamp }) => {
   return `${timestamp} [${level}]: ${message}`;
});
exports.logger = winston_1.default.createLogger({
   level: 'info',
   format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
   transports: [
      new winston_1.default.transports.Console({
         format: combine(colorize(), logFormat),
      }),
      new winston_1.default.transports.File({
         filename: 'logs/error.log',
         level: 'error',
      }),
      new winston_1.default.transports.File({
         filename: '../logs/combined.log',
      }),
   ],
});
// export default logger;
/*
{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
*/
