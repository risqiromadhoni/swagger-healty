import { Injectable } from '@nestjs/common';
import { Dog, DogType } from './dog';

@Injectable()
export class DogsService {
    dogs: Array<Dog> = [
        {
            id: 1,
            name: 'Blacky',
            type: DogType.Cihuahua,
            addr: 'ID'
        }
    ];

    getDogs () {
        return this.dogs;
    }

    createDogs (dog: Dog) {
        this.dogs = [...this.dogs, {...dog}];
    }
}
