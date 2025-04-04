import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
    private _Car = 'BMW';
    createCar(): string{
        let car = 'BMW'
        return car
    }
    public get getCar(){
        return this._Car
    }
    public set setCar(carName: string){
        this._Car = carName
    }
    updateCarName(): string{
        return this._Car
    }
}
