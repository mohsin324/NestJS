import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Req, Request } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
    constructor(private SongsService: SongsService){}
    @Post('create-song')
    createSong(@Body() createSongDTO: CreateSongDTO){
        return this.SongsService.create(createSongDTO)
    }
    @Get('getsongs')
    findAll(){
        try{
            return this.SongsService.findAllSongs()
        }catch(err){
            console.log('I am in the catch block ', err);
            throw new HttpException('server error ', HttpStatus.OK, { cause: err})
        }
    }
    @Get(':id')
    findOne(){
        return `fetch song on the based on id`
    }
    @Put(':id')
    update(){
        return 'updated the song on the base of id'
    }
    @Delete(':id')
    delete(){
        return 'delete song on the base of id'
    }
    @Delete()
    deleteAll(){
        return 'delete song on the base of id'
    }
}
