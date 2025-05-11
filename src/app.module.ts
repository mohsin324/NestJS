import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { MusicController } from './music/music.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController, MusicController],
  providers: [AppService],
})
export class AppModule {}
