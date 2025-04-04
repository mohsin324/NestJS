import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { CarModule } from './car/car.module';
// import songcontroller for middleware purposes
import { SongsController } from './songs/songs.controller'
import { LoggerMiddleware, LoggerMiddleware2, SongsControllerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [SongsModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('songs'); // option 1
    consumer
      .apply(LoggerMiddleware2)
      .forRoutes({ path: 'songs/create-song', method: RequestMethod.POST}); // option 2
    consumer
      .apply(SongsControllerMiddleware)
      .forRoutes(SongsController);      // option 3
    // for global middleware
    consumer
      .apply(SongsControllerMiddleware).forRoutes('*')    // option 4, for global
  }
}
