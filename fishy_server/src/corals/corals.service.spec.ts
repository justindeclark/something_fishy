import { Test, TestingModule } from '@nestjs/testing';
import { CoralsService } from './corals.service';

describe('CoralsService', () => {
  let service: CoralsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoralsService],
    }).compile();

    service = module.get<CoralsService>(CoralsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
