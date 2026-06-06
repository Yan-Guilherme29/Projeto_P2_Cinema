import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNumber } from 'class-validator';

export class CreatePedidoDto {
    @ApiProperty({ example: 1, description: 'Quantidade de ingressos inteiras' })
    @IsInt()
    qntInteira!: number;

    @ApiProperty({ example: 0, description: 'Quantidade de ingressos meia entrada' })
    @IsInt()
    qntMeia!: number;

    @ApiProperty({ example: 0, description: 'Valor total do pedido' })
    @IsNumber()
    valorTotal!: number;

    @ApiProperty({ example: [], description: 'Lista de IDs dos ingressos selecionados' })
    @IsArray()
    @IsInt({ each: true })
    ingressos!: number[];

    @ApiProperty({ example: [], description: 'Lista de IDs dos lanches e combos selecionados' })
    @IsArray()
    @IsInt({ each: true })
    lancheCombos!: number[];
}

