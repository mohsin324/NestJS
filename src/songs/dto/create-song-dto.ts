import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly Title: string;

    @IsNotEmpty()
    @IsArray()
    readonly Artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly ReleaseDate: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly Duration: Date;
}