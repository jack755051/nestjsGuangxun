import { Column, Entity, PrimaryColumn } from 'typeorm';
import { newsType } from '../../../common/interface/lastest_news.interface';

@Entity()
export class LastestNewsEntity {
  //最新消息圖片uuid
  @PrimaryColumn()
  news_id: string;
  //最新消息標題
  @Column('text')
  news_title: string;
  //最新消息種類
  @Column({
    type: 'enum',
    enum: newsType,
  })
  news_type: newsType;
  //最新消息建立日期
  @Column()
  news_date: Date;
  //最新消息內容
  @Column('mediumtext')
  news_content: string;
  //最新消息本地圖片
  @Column({ type: 'blob', nullable: true })
  news_image: Buffer;
  //最新消息雲端網址
  @Column({ nullable: true })
  news_image_url?: string;
}
