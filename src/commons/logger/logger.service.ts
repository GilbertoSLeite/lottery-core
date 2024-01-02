import { format } from 'date-fns';
import pino from 'pino';
import { generateTransactionId } from './generate-transaction-id.service';

export class LoggerService {
  private logger = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  });

  log(
    message: string,
    level: 'info' | 'error' | 'warn' | 'debug',
    caller: string,
    transactionId?: string,
  ) {
    const id = transactionId || `new_generation_${generateTransactionId()}`;
    this.logger[level]({
      time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX"),
      level,
      message,
      from: caller,
      transactionId: id,
    });
  }
}
