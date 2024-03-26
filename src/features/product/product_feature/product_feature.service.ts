import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductFeatureEntity } from '../../../entity/product/product_feature/product_feature';

@Injectable()
export class ProductFeatureService {
  constructor(
    @InjectRepository(ProductFeatureEntity)
    private readonly ProductFeatureRepository: Repository<ProductFeatureEntity>,
  ) {}

  //建立商品
  // public async build
}
