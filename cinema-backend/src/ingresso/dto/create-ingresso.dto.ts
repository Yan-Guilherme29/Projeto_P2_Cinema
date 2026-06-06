import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber } from "class-validator";

export class CreateIngressoDto {

    @ApiProperty({ example: 30.00, description: 'Valor da Inteira' })
    @IsNumber()
    valorInteira!: number;

    @ApiProperty({ example: 15.00, description: 'Valor da Meia' })
    @IsNumber()
    valorMeia!: number;

    @ApiProperty({ example: 1, description: 'Sessão do filme' })
    @IsInt()
    sessaoId!: number;



}

