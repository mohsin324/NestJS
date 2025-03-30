import { Injectable } from '@nestjs/common';
import { CraeteSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
    // local db
    // local array
    private readonly _songs: CraeteSongDTO[] = [];
    public myName: string = "Mohsin"
    // method 1 for create song
    createSong(song: CraeteSongDTO): CraeteSongDTO[] {
        this._songs.push(song);
        return this._songs;
    }
    // method 2 for find all songs
    findAll(count: string): string{
        return `This is dynamic Type: ${count}`;
    }
}
