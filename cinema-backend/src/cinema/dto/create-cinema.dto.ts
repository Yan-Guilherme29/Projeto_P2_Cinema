import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCinemaDto {
    @ApiProperty({ example: 'Cineplex', description: 'Nome do cinema' })
    @IsString()
    nome!: string;

    @ApiProperty({ example: 'Rua 123, Setor Bueno, Goiânia - GO', description: 'Endereço do cinema' })
    @IsString()
    endereco!: string;
}