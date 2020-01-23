import { ApiProperty } from "@nestjs/swagger";

export class Cat {
    @ApiProperty({required: true})
    id: number;

    @ApiProperty({required: true})
    name: string;
}
