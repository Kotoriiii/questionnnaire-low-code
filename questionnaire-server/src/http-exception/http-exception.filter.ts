import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus ? exception.getStatus() : 500;
    const message = exception.message ? exception.message : '服务器错误';

    response.status(status).json({
      errno: -1,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
