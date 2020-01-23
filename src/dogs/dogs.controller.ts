import { Controller, Get, Post, Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('v1')
@Controller('api/v1')
export class DogsController {
    constructor (private srv: DogsService) {}

    @Get('dogs')
    getDogs () {
        return this.srv.getDogs();
    }

    @Post('dogs')
    createDogs (@Body() dog: Dog) {
        this.srv.createDogs(dog);
    }
}
