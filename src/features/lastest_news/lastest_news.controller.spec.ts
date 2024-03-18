import { Test, TestingModule } from '@nestjs/testing';
import { LastestNewsController } from './lastest_news.controller';

describe('LastestNewsController', () => {
  let controller: LastestNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LastestNewsController],
    }).compile();

    controller = module.get<LastestNewsController>(LastestNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
