import { Module } from '@nestjs/common';
import { ProductFeatureController } from './product_feature.controller';
import { ProductFeatureService } from './product_feature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductFeatureEntity } from '../../../entity/product/product_feature/product_feature';

@Module({
  imports: [TypeOrmModule.forFeature([ProductFeatureEntity])],
  controllers: [ProductFeatureController],
  providers: [ProductFeatureService],
  exports: [ProductFeatureService],
})
export class ProductFeatureModule {}
