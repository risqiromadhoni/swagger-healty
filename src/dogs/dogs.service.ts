import { Injectable } from '@nestjs/common';
import { Dog, DogType, DogAddr } from './dog';

@Injectable()
export class DogsService {
    dogs: Array<Dog> = [
        {
            id: 1,
            name: 'Blacky',
            type: DogType.Cihuahua,
            addr: DogAddr.ID
        }
    ];

    getDogs () {
        return this.dogs;
    }

    createDogs (dog: Dog) {
        this.dogs = [...this.dogs, {...dog}];
    }
}
