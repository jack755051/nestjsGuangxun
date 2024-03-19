import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LastestNewsEntity } from '../../entity/lastest_news/lastest_news';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {
  getLastestNews,
  LastestNews,
} from '../../common/interface/lastest_news.interface';
import * as sharp from 'sharp';
import { TestEntity } from '../../entity/post/test/test';
import { GetLastestNewsEntity } from '../../entity/lastest_news/get-lastest_news/get-lastest_news';

@Injectable()
export class LastestNewsService {
  constructor(
    //建立最新消息
    @InjectRepository(LastestNewsEntity)
    private readonly LastestNewsTypeRepository: Repository<LastestNewsEntity>,
    //取得最新消息
    @InjectRepository(GetLastestNewsEntity)
    private readonly GetLastestNewsRepository: Repository<GetLastestNewsEntity>,
    //測試檔案上傳用
    @InjectRepository(TestEntity)
    private readonly TestRepository: Repository<TestEntity>,
  ) {}

  public async buildNews(lastestNews: LastestNews): Promise<LastestNewsEntity> {
    const uuid: string = uuidv4();
    // let compressedImage;

    console.log('lastestNews.news_image', lastestNews);
    const compressedImage = await sharp(lastestNews.news_image)
      .resize(1024) // 调整图片宽度为 1024px，高度自适应
      .jpeg({ quality: 80 }) // 设置压缩质量
      .toBuffer(); // 将处理后的图片输出为 Buffer

    const news = new LastestNewsEntity();
    news.news_id = uuid;

    news.news_title = lastestNews.news_title;
    news.news_date = lastestNews.news_date;
    news.news_content = lastestNews.news_content;
    news.news_type = lastestNews.news_type;

    // 根据提供的数据类型决定如何处理图片
    if (lastestNews.news_image) {
      news.news_image = compressedImage; // 如果有Buffer数据
    }
    if (lastestNews.news_image_url) {
      news.news_image_url = lastestNews.news_image_url; // 如果有图片URL
    }

    return await this.LastestNewsTypeRepository.save(news);
  }

  public async getNews(params: getLastestNews) {
    const { news_type, page, single_page_count } = params;

    //計算跳過的消息數量
    const skip = (page - 1) * single_page_count;

    //創建查詢構建器
    //這裡的'news'為別名，類似as的概念
    const queryBuilder =
      this.LastestNewsTypeRepository.createQueryBuilder('news');

    if (news_type) {
      queryBuilder.andWhere('news.news_type = :news_type', { news_type });
    }

    const newsResult = await queryBuilder
      .orderBy('news.news_date', 'DESC')
      .skip(skip)
      .take(single_page_count)
      .getMany();

    //計算總數以計算總頁數
    const totalCount = await queryBuilder.getCount();

    //計算總頁數
    const totalPages = Math.ceil(totalCount / single_page_count);

    return {
      data: newsResult,
      page,
      single_page_count,
      totalPages,
      totalCount,
    };

    // return await this.LastestNewsTypeRepository.find();
  }

  // public async test(file:any){
  //   return await this.TestRepository.save(file);
  // }
}
