import { Body, Controller, Delete, Get, Post, Put, Req, Request } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
    constructor(private SongsService: SongsService){}
    @Post()
    createSong(@Body() createSongDTO: CreateSongDTO){
        console.log('Request Body: ', JSON.stringify(Request))
        console.log('Request Body: ', JSON.stringify(Req))

        return this.SongsService.create(createSongDTO)
    }
    @Get()
    findAll(){
        return this.SongsService.findAllSongs()
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
