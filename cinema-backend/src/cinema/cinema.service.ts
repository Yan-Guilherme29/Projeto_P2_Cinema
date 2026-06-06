import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(private prisma: PrismaService) {}

  create(createCinemaDto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: createCinemaDto });
  }

  findAll() {
    return this.prisma.cinema.findMany();
  }

  findOne(id: number) {
    return this.prisma.cinema.findUnique({ where: { id } });
  }

  update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return this.prisma.cinema.update({ where: { id }, data: updateCinemaDto });
  }

  remove(id: number) {
    return this.prisma.cinema.delete({ where: { id } });
  }
}