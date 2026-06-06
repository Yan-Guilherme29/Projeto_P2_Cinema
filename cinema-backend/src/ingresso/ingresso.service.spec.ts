import { Test, TestingModule } from '@nestjs/testing';
import { IngressoService } from './ingresso.service';

describe('IngressoService', () => {
  let service: IngressoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngressoService],
    }).compile();

    service = module.get<IngressoService>(IngressoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
