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
        try{
            throw new Error('Exception while fetching the records from DB!')
            // return this._songs
        }catch(err){
            throw new Error('Exception while fetching the records from DB!')
        }
    }

}
