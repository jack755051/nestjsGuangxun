import { Test, TestingModule } from '@nestjs/testing';
import { ProductFeatureController } from './product_feature.controller';

describe('ProductFeatureController', () => {
  let controller: ProductFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFeatureController],
    }).compile();

    controller = module.get<ProductFeatureController>(ProductFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
