import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ingresso')
@Controller('ingresso')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um novo ingresso' })
  @ApiResponse({ status: 201, description: 'Ingresso criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.ingressoService.create(createIngressoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os ingressos' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll() {
    return this.ingressoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um ingresso pelo ID' })
  @ApiResponse({ status: 200, description: 'Ingresso retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Ingresso não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.ingressoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um ingresso pelo ID' })
  @ApiResponse({ status: 200, description: 'Ingresso atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Ingresso não encontrado.' })
  update(@Param('id') id: string, @Body() updateIngressoDto: UpdateIngressoDto) {
    return this.ingressoService.update(+id, updateIngressoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um ingresso pelo ID' })
  @ApiResponse({ status: 200, description: 'Ingresso removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Ingresso não encontrado.' })
  remove(@Param('id') id: string) {
    return this.ingressoService.remove(+id);
  }
}
