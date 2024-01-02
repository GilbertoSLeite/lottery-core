import { Test, TestingModule } from '@nestjs/testing';
import { QuinaController } from './quina.controller';

describe('QuinaController', () => {
  let controller: QuinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuinaController],
    }).compile();

    controller = module.get<QuinaController>(QuinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
