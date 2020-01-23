export const enum DogType {
    Pitbul = 'Pitbul',
    Cihuahua = 'Cihuahua',
}
export class Dog {
    id: number;
    name: string;
    type?: string;
    addr?: 'ID'|'US'|'UK';
}
