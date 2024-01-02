import { Test, TestingModule } from '@nestjs/testing';
import { LotofacilController } from './lotofacil.controller';

describe('LotofacilController', () => {
  let controller: LotofacilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotofacilController],
    }).compile();

    controller = module.get<LotofacilController>(LotofacilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
