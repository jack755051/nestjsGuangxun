import { Module } from '@nestjs/common';
import { ProductListController } from './product_list.controller';
import { ProductListService } from './product_list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductListEntity } from '../../../entity/product/product_list/product_list';

@Module({
  imports: [TypeOrmModule.forFeature([ProductListEntity])],
  controllers: [ProductListController],
  providers: [ProductListService],
  exports: [ProductListService],
})
export class ProductListModule {}
