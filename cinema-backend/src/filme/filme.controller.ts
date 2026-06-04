import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('filme')
@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo filme' })
  @ApiResponse({ status: 201, description: 'Filme criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.create(createFilmeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um filme pelo ID' })
  @ApiResponse({ status: 200, description: 'Filme encontrado.' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.filmeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um filme' })
  @ApiResponse({ status: 200, description: 'Filme atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.update(+id, updateFilmeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um filme' })
  @ApiResponse({ status: 200, description: 'Filme removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.filmeService.remove(+id);
  }
}