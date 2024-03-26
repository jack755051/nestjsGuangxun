import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../../common/interface/product/product.interface';

export class BuildProductDto {
  @ApiProperty()
  product_name: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  product_price: number;
}
