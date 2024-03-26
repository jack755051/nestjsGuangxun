import { Test, TestingModule } from '@nestjs/testing';
import { ProductListController } from './product_list.controller';

describe('ProductListController', () => {
  let controller: ProductListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductListController],
    }).compile();

    controller = module.get<ProductListController>(ProductListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
