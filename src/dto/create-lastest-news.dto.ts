import {ApiProperty} from '@nestjs/swagger';
import {LastestNewsEntity} from "../entity/post/lastest_news/lastest_news";

export class CreateLastestNewsDto {
    @ApiProperty()
    news_id: string;

    @ApiProperty()
    news_title: string;

    @ApiProperty()
    news_date: Date;

    @ApiProperty()
    news_content: string;
}