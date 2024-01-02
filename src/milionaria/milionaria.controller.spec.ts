import { Test, TestingModule } from '@nestjs/testing';
import { MilionariaController } from './milionaria.controller';

describe('MilionariaController', () => {
  let controller: MilionariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilionariaController],
    }).compile();

    controller = module.get<MilionariaController>(MilionariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
