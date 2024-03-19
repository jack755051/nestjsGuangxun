import { ApiProperty } from '@nestjs/swagger';
import { newsType } from '../../../common/interface/lastest_news.interface';

export class GetLastestNewsDto {
  @ApiProperty()
  news_type: newsType | null;

  @ApiProperty()
  page: number;

  @ApiProperty()
  single_page_count: number;
}
