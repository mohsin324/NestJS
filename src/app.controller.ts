import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/api/v1/get-user')
  getHello(): string {
    return this.appService.getHello('Mohsin Munir');
  }

  @Post('crate-user')
  PostUser(): void {
    console.log('Created User successfully');
  }

}
