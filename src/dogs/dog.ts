import { ApiProperty, ApiQuery } from "@nestjs/swagger";

export const enum DogType {
    Pitbul = 'Pitbul',
    Cihuahua = 'Cihuahua',
}

export const enum DogAddr {
    ID = 'ID',
    US = 'US',
    UK = 'UK'
}
export class Dog {
    @ApiProperty({required: true})
    id: number;

    @ApiProperty({required: true})
    name: string;

    @ApiProperty({enum: ['Pitbul', 'Cihuahua']})
    type?: DogType;

    // @ApiProperty({required: false})
    @ApiProperty({enum: ['ID', 'US', 'UK']})
    addr?: DogAddr;
}
