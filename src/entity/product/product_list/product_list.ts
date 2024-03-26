import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../../common/interface/product/product.interface';

@Entity()
export class ProductListEntity {
  //產品編號
  @PrimaryGeneratedColumn()
  id: number;

  //產品型號
  @Column()
  product_id: string;

  //產品uuid
  @Column()
  product_uuid: string;

  //產品中文名稱
  @Column()
  product_name: string;

  //產品種類
  @Column({ type: 'enum', enum: Category })
  category: Category;

  //產品價格
  @Column()
  product_price: number;
}
