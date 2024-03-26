import { Module } from '@nestjs/common';
import { ProductFeatureController } from './product_feature.controller';
import { ProductFeatureService } from './product_feature.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ProductFeatureController],
  providers: [ProductFeatureService],
  exports: [ProductFeatureService],
})
export class ProductFeatureModule {}
