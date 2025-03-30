import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [SongsModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
