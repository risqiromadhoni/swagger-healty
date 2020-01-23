import { Controller, Get, Post, Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog';
import { ApiTags } from '@nestjs/swagger';

@Controller('dogs')
export class DogsController {
    constructor (private srv: DogsService) {}

    @Get()
    getDogs () {
        return this.srv.getDogs();
    }

    @Post()
    createDogs (@Body() dog: Dog) {
        this.srv.createDogs(dog);
    }
}
