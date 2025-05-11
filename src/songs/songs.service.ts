import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly _songs: (string|number) [] = [];
    // method
    create(song: string){
        this._songs.push(song);
        return this._songs
    }
    findAllSongs(){
        return this._songs
    }

}
