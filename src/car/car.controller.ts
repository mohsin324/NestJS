import { Controller, Post } from '@nestjs/common';
import { CarService } from './car.service';
@Controller('car')
export class CarController {
    private readonly carService: CarService;
    // constructor (private readonly carService: CarService){}
    constructor(carService: CarService){
        this.carService = carService
    }
    @Post('car-name')
    createCar(){
        return `Car name is ${this.carService.getCar}`;
    }
    @Post('update-carname')
    updateCarName(){
        console.log(`Set car name is:  ${this.carService.getCar}`);
        this.carService.setCar = 'Honda'
        return `Updated Car name is ${this.carService.updateCarName()}`;
    }
}
