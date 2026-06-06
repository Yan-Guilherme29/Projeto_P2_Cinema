import { Test, TestingModule } from '@nestjs/testing';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';

describe('SalaController', () => {
  let controller: SalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalaController],
      providers: [SalaService],
    }).compile();

    controller = module.get<SalaController>(SalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
