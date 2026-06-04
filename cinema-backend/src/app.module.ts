import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LancheComboModule } from './lanche-combo/lanche-combo.module';

@Module({
  imports: [PrismaModule, LancheComboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
