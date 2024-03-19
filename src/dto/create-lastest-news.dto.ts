import { ApiProperty } from '@nestjs/swagger';
import { newsType } from '../common/interface/lastest_news.interface';

export class CreateLastestNewsDto {
  @ApiProperty()
  news_title: string;

  @ApiProperty()
  news_type: newsType;

  @ApiProperty()
  news_date: Date;

  @ApiProperty()
  news_content: string;
}
