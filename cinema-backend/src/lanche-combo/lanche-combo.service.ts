import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';

@Injectable()
export class LancheComboService {
  constructor(private prisma: PrismaService) { }

  create(createLancheComboDto: CreateLancheComboDto) {
    return this.prisma.lancheCombo.create({ data: createLancheComboDto });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany();
  }

  findOne(id: number) {
    return this.prisma.lancheCombo.findUnique({ where: { id } });
  }

  update(id: number, updateLancheComboDto: UpdateLancheComboDto) {
    return this.prisma.lancheCombo.update({ where: { id }, data: updateLancheComboDto });
  }

  remove(id: number) {
    return this.prisma.lancheCombo.delete({ where: { id } });
  }
}