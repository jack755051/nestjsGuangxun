import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { newsType } from '../../../common/interface/lastest_news.interface';

@Entity()
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: string;
  //最新消息本地圖片
  @Column({ type: 'mediumblob', nullable: true })
  news_image: Buffer;
  //最新消息雲端網址
}
