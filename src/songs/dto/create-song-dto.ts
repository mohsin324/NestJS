import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CraeteSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly Title: string;

    @IsNotEmpty()
    @IsArray()
    readonly Artist: string;

    @IsNotEmpty()
    @IsDateString()
    readonly ReleasedDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly Duration: string;

}