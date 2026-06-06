import { Module } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { PrismaModule } from '../prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
