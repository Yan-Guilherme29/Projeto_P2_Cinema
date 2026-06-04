import { Module } from '@nestjs/common';
import { LancheComboService } from './lanche-combo.service';
import { LancheComboController } from './lanche-combo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LancheComboController],
  providers: [LancheComboService],
})


export class LancheComboModule {}
