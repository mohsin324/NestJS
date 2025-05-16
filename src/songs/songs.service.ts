import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
    private readonly _songs: CreateSongDTO [] = [];
    // method
    create(song: CreateSongDTO){
        this._songs.push(song);
        return this._songs
    }
    findAllSongs(){
        return this._songs
    }

}
