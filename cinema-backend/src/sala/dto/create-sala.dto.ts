import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';

export class CreateSalaDto {
    @ApiProperty({ example: 1, description: 'Número da sala' })
    @IsInt()
    numero!: number;

    @ApiProperty({ example: 100, description: 'Capacidade total da sala' })
    @IsInt()
    capacidade!: number;

    @ApiProperty({ example: [1, 2, 3, 4, 5], description: 'Poltronas da sala' })
    @IsArray()
    @IsInt({ each: true })
    poltronas!: number[];

    @ApiProperty({ example: 1, description: 'ID do cinema' })
    @IsInt()
    cinemaId!: number;
}