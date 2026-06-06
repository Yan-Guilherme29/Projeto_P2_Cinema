import { Test, TestingModule } from '@nestjs/testing';
import { SessaoService } from './sessao.service';

describe('SessaoService', () => {
  let service: SessaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessaoService],
    }).compile();

    service = module.get<SessaoService>(SessaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
