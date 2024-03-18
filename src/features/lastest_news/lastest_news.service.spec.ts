import { Test, TestingModule } from '@nestjs/testing';
import { LastestNewsService } from './lastest_news.service';

describe('LastestNewsService', () => {
  let service: LastestNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LastestNewsService],
    }).compile();

    service = module.get<LastestNewsService>(LastestNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
