import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LancheComboModule } from './lanche-combo/lanche-combo.module';
import { FilmeModule } from './filme/filme.module';

@Module({
  imports: [PrismaModule, LancheComboModule, FilmeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
