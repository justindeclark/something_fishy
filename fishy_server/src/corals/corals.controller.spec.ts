import { Test, TestingModule } from '@nestjs/testing';
import { CoralsController } from './corals.controller';

describe('CoralsController', () => {
  let controller: CoralsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoralsController],
    }).compile();

    controller = module.get<CoralsController>(CoralsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
