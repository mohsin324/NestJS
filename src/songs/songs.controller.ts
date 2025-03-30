import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CraeteSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService){};

    @Post('create-song')
    create(@Body() createSongDTO: CraeteSongDTO){
        return this.songService.createSong(createSongDTO);  
    }
    @Get()
    GetAllSongs(){
        return this.songService.findAll('Dynamic Type: ')
    }
}
