import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('v1')
@Controller('api/v1')
export class CatsController {
    constructor(private srv: CatsService) {}

    @Get('cats')
    getCats() {
        return this.srv.getCats();
    }

    @Post('cats')
    createCat (@Body() cat: Cat) {
        this.srv.createCats(cat);
    }
}
