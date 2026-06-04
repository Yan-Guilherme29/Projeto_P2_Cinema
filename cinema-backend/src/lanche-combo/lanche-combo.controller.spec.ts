import { Test, TestingModule } from '@nestjs/testing';
import { LancheComboController } from './lanche-combo.controller';
import { LancheComboService } from './lanche-combo.service';

describe('LancheComboController', () => {
  let controller: LancheComboController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LancheComboController],
      providers: [LancheComboService],
    }).compile();

    controller = module.get<LancheComboController>(LancheComboController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
