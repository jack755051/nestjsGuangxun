import {Controller, Post, Body} from '@nestjs/common';
import {LastestNewsEntity} from "../../entity/post/lastest_news/lastest_news";
import {LastestNewsService} from "./lastest_news.service";
import {LastestNews} from "../../common/interface/lastest_news.interface";

@Controller('lastest-news')
export class LastestNewsController {

    constructor(
        private lastestNewsService: LastestNewsService) {
    }

    @Post()
    async createLastestNews(@Body() newNews: LastestNews): Promise<LastestNewsEntity> {
        return this.lastestNewsService.buildNews(newNews)
    }
}
