import {
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { IHttpErrorResponse } from 'shared/interfaces/http.interfaces';

export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode =
      exception?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception?.message
      ? exception.message
      : `${Number(statusCode) >= 500 ? '服务器错误' : '客户端错误'}`;

    // 标准化错误信息
    const errorReponse: IHttpErrorResponse = {
      success: false,
      message,
      code: statusCode,
    };

    response.setHeader('Content-Type', 'application/json');
    response.status(statusCode);
    response.send(errorReponse);
  }
}
