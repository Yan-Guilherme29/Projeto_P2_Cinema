import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) { }

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({
      data: {
        qntInteira: createPedidoDto.qntInteira,
        qntMeia: createPedidoDto.qntMeia,
        valorTotal: createPedidoDto.valorTotal,
        ingressos: {
          connect: createPedidoDto.ingressos.map(id => ({ id })),
        },
        lancheCombos: {
          connect: createPedidoDto.lancheCombos.map(id => ({ id })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({
      where: { id },
      data: {
        qntInteira: updatePedidoDto.qntInteira,
        qntMeia: updatePedidoDto.qntMeia,
        valorTotal: updatePedidoDto.valorTotal,
        ingressos: updatePedidoDto.ingressos
          ? { connect: updatePedidoDto.ingressos.map(id => ({ id })) }
          : undefined,
        lancheCombos: updatePedidoDto.lancheCombos
          ? { connect: updatePedidoDto.lancheCombos.map(id => ({ id })) }
          : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}