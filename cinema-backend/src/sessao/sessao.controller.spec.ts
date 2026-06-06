import { Test, TestingModule } from '@nestjs/testing';
import { SessaoController } from './sessao.controller';
import { SessaoService } from './sessao.service';

describe('SessaoController', () => {
  let controller: SessaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessaoController],
      providers: [SessaoService],
    }).compile();

    controller = module.get<SessaoController>(SessaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
