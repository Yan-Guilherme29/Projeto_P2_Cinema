import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  create(createSessaoDto: CreateSessaoDto) {
    return this.prisma.sessao.create({
      data: {
        horario: new Date(createSessaoDto.horario),
        filme: { connect: { id: createSessaoDto.filmeId } },
        sala: { connect: { id: createSessaoDto.salaId } },
        cinema: { connect: { id: createSessaoDto.cinemaId } },
      },
    });
  }

  findAll() {
    return this.prisma.sessao.findMany();
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({ where: { id } });
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    return this.prisma.sessao.update({
      where: { id },
      data: {
        horario: updateSessaoDto.horario ? new Date(updateSessaoDto.horario) : undefined,
        filme: updateSessaoDto.filmeId ? { connect: { id: updateSessaoDto.filmeId } } : undefined,
        sala: updateSessaoDto.salaId ? { connect: { id: updateSessaoDto.salaId } } : undefined,
        cinema: updateSessaoDto.cinemaId ? { connect: { id: updateSessaoDto.cinemaId } } : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({ where: { id } });
  }
}