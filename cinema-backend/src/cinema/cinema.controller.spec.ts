import { Test, TestingModule } from '@nestjs/testing';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';

describe('CinemaController', () => {
  let controller: CinemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CinemaController],
      providers: [CinemaService],
    }).compile();

    controller = module.get<CinemaController>(CinemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
