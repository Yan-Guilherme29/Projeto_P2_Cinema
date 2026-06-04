import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsString } from 'class-validator';
import { Genero } from '../../generated/prisma/client';

export class CreateFilmeDto {
    @ApiProperty({ example: 'Inception', description: 'Título do filme' })
    @IsString()
    titulo!: string;

    @ApiProperty({ example: 'Um ladrão que rouba segredos através dos sonhos', description: 'Sinopse do filme' })
    @IsString()
    sinopse!: string;

    @ApiProperty({ example: '14', description: 'Classificação indicativa do filme' })
    @IsString()
    classificacao!: string;

    @ApiProperty({ example: '2024-01-01T02:28:00.000Z', description: 'Duração do filme' })
    @IsDateString()
    duracao!: string;

    @ApiProperty({ example: 'Leonardo DiCaprio, Joseph Gordon-Levitt', description: 'Elenco do filme' })
    @IsString()
    elenco!: string;

    @ApiProperty({ example: Genero.ACAO, enum: Genero, description: 'Gênero do filme' })
    @IsEnum(Genero)
    genero!: Genero;

    @ApiProperty({ example: '2024-01-01T00:00:00.000Z', description: 'Data de início de exibição' })
    @IsDateString()
    dataInicioExibicao!: string;

    @ApiProperty({ example: '2024-03-01T00:00:00.000Z', description: 'Data de fim de exibição' })
    @IsDateString()
    dataFinalExibicao!: string;

    @ApiProperty({ example: 1, description: 'ID do cinema' })
    @IsInt()
    cinemaId!: number;
}