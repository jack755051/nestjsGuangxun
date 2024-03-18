import { ApiProperty } from '@nestjs/swagger';
import { LastestNewsEntity } from '../entity/post/lastest_news/lastest_news';
import { newsType } from '../common/interface/lastest_news.interface';

export class CreateLastestNewsDto {
  @ApiProperty()
  news_title: string;

  @ApiProperty()
  news_type: newsType;

  @ApiProperty()
  news_image: Buffer;

  @ApiProperty()
  news_date: Date;

  @ApiProperty()
  news_content: string;
}
