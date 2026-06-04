import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateLancheComboDto {
    @ApiProperty({ example: 'Combo Pipoca', description: 'Nome do lanche combo' })
    @IsString()
    nome!: string;

    @ApiProperty({ example: 'Pipoca grande com refrigerante', description: 'Descrição do lanche combo' })
    @IsString()
    descricao!: string;

    @ApiProperty({ example: 25.90, description: 'Valor unitário do combo' })
    @IsNumber()
    valorUnitario!: number;

    @ApiProperty({ example: 2, description: 'Quantidade de unidades' })
    @IsInt()
    qtUnidade!: number;

    @ApiProperty({ example: 51.80, description: 'Subtotal do combo' })
    @IsNumber()
    subtotal!: number;
}