import {ApiProperty} from "@nestjs/swagger";
import {newsType} from "../../../common/interface/lastest_news.interface";

export class GetLastestNewDto {
    @ApiProperty()
    news_type:newsType | null;

    @ApiProperty()
    page:number;

    @ApiProperty()
    singlePageCount:number;
}
