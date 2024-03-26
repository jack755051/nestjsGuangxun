import { Column, Entity, IsNull } from 'typeorm';

@Entity()
export class GetLastestNewsEntity {
  @Column()
  news_type: string;
}
