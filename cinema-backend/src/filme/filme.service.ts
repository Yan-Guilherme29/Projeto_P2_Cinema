import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(createFilmeDto: CreateFilmeDto) {
    const { cinemaId, ...filmeData } = createFilmeDto;

    return this.prisma.filme.create({
      data: {
        ...filmeData,
        duracao: new Date(createFilmeDto.duracao),
        dataInicioExibicao: new Date(createFilmeDto.dataInicioExibicao),
        dataFinalExibicao: new Date(createFilmeDto.dataFinalExibicao),
        cinema: { connect: { id: cinemaId } },
      },
    });
  }

  findAll() {
    return this.prisma.filme.findMany();
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({ where: { id } });
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return this.prisma.filme.update({
      where: { id },
      data: {
        ...updateFilmeDto,
        duracao: updateFilmeDto.duracao ? new Date(updateFilmeDto.duracao) : undefined,
        dataInicioExibicao: updateFilmeDto.dataInicioExibicao ? new Date(updateFilmeDto.dataInicioExibicao) : undefined,
        dataFinalExibicao: updateFilmeDto.dataFinalExibicao ? new Date(updateFilmeDto.dataFinalExibicao) : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.filme.delete({ where: { id } });
  }
}