import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Category } from '../../../common/interface/product/product.interface';

@Entity()
export class ProductFeatureEntity {
  @PrimaryColumn()
  product_id: string;

  //產品中文名稱
  @Column()
  product_name: string;

  //產品中文抬頭
  @Column()
  product_title: string;

  //產品種類
  @Column({ type: 'enum', enum: Category })
  category: Category;

  //產品特色
  @Column({ type: 'json' })
  product_features: any;
}
