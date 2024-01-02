import { Test, TestingModule } from '@nestjs/testing';
import { MegaSenaController } from './mega-sena.controller';

describe('MegaSenaController', () => {
  let controller: MegaSenaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MegaSenaController],
    }).compile();

    controller = module.get<MegaSenaController>(MegaSenaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
