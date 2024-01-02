import { Test, TestingModule } from '@nestjs/testing';
import { DiaSorteController } from './dia-sorte.controller';

describe('DiaSorteController', () => {
  let controller: DiaSorteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiaSorteController],
    }).compile();

    controller = module.get<DiaSorteController>(DiaSorteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
