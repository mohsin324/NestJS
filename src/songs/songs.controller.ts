import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
@Controller('songs')
export class SongsController {
    constructor(private SongsService: SongsService){}
    @Post()
    createSong(){
        return this.SongsService.create("Animals By Martin Garrix!")
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
