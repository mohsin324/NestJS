import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CraeteSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService){};

    @Post('create-song')
    create(@Body() createSongDTO: CraeteSongDTO){
        return this.songService.createSong(createSongDTO);  
    }
    @Get('get-songs')
    GetAllSongs(){
        try{
            return this.songService.findAll();
        }catch(err){
            console.log(err?.message, ' Error Message ')
            // for exception nest js has httpexception
            throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, { cause: err})
        }
    }
}
