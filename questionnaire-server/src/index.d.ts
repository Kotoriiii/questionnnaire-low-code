/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user: {
      username: string;
      nickname: string;
    };
  }
}
