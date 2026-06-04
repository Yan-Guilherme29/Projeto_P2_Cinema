import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LancheComboService } from './lanche-combo.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('lanche-combo')
@Controller('lanche-combo')
export class LancheComboController {
  constructor(private readonly lancheComboService: LancheComboService) { }

  @Post()
  @ApiOperation({ summary: 'Criar um novo lanche combo' })
  @ApiResponse({ status: 201, description: 'Lanche combo criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createLancheComboDto: CreateLancheComboDto) {
    return this.lancheComboService.create(createLancheComboDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches combo' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll() {
    return this.lancheComboService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um lanche combo pelo ID' })
  @ApiResponse({ status: 200, description: 'Lanche combo encontrado.' })
  @ApiResponse({ status: 404, description: 'Lanche combo não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.lancheComboService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lanche combo' })
  @ApiResponse({ status: 200, description: 'Lanche combo atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  update(@Param('id') id: string, @Body() updateLancheComboDto: UpdateLancheComboDto) {
    return this.lancheComboService.update(+id, updateLancheComboDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche combo' })
  @ApiResponse({ status: 200, description: 'Lanche combo removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.lancheComboService.remove(+id);
  }
}