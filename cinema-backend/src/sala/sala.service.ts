import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) { }

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({ data: createSalaDto });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({ where: { id } });
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.prisma.sala.update({ where: { id }, data: updateSalaDto });
  }

  remove(id: number) {
    return this.prisma.sala.delete({ where: { id } });
  }
}