import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.body, ' = = = = => Request Body')
    console.info(`Request.... ${new Date()}`);
    next();
  }
} 

export class LoggerMiddleware2 implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.info(`Request.... For POST Method By Nest JS Framework`);
    next();
  }
} 
export class SongsControllerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.info(`=  = = = == = = = == = `);
    console.warn('This is songs controller middleware');
    console.info(`=  = = = == = = = == = `);
    next();
  }
} 