import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LancheComboModule } from './lanche-combo/lanche-combo.module';
import { FilmeModule } from './filme/filme.module';
import { SalaModule } from './sala/sala.module';
import { CinemaModule } from './cinema/cinema.module';
import { SessaoModule } from './sessao/sessao.module';
import { IngressoModule } from './ingresso/ingresso.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [PrismaModule, LancheComboModule, FilmeModule, SalaModule, CinemaModule, SessaoModule, IngressoModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
