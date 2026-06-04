import { Test, TestingModule } from '@nestjs/testing';
import { LancheComboService } from './lanche-combo.service';

describe('LancheComboService', () => {
  let service: LancheComboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LancheComboService],
    }).compile();

    service = module.get<LancheComboService>(LancheComboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
