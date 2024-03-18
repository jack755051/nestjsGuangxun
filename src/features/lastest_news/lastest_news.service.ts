import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {LastestNewsEntity} from "../../entity/post/lastest_news/lastest_news";
import {Repository} from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import {LastestNews} from "../../common/interface/lastest_news.interface";

@Injectable()
export class LastestNewsService {
    constructor(
        @InjectRepository(LastestNewsEntity)
        private readonly LastestNewsTypeRepository:Repository<LastestNewsEntity>,
    ) {

    }

    public async buildNews(lastestNews:LastestNews): Promise<LastestNewsEntity>{
        const uuid:string = uuidv4()
        const news = new LastestNewsEntity();
        news.news_id = uuid;
        news.news_title = lastestNews.newsTitle;
        news.news_date = lastestNews.newsDate;
        news.news_content = lastestNews.newsContent;

        return await this.LastestNewsTypeRepository.save(news)
    }
}
