import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova sala' })
  @ApiResponse({ status: 201, description: 'Sala criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salaService.create(createSalaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll() {
    return this.salaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma sala pelo ID' })
  @ApiResponse({ status: 200, description: 'Sala encontrada.' })
  @ApiResponse({ status: 404, description: 'Sala não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.salaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma sala' })
  @ApiResponse({ status: 200, description: 'Sala atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salaService.update(+id, updateSalaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sala' })
  @ApiResponse({ status: 200, description: 'Sala removida com sucesso.' })
  remove(@Param('id') id: string) {
    return this.salaService.remove(+id);
  }
}