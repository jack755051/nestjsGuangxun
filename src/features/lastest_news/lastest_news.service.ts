import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LastestNewsEntity } from '../../entity/post/lastest_news/lastest_news';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { LastestNews } from '../../common/interface/lastest_news.interface';
import * as sharp from 'sharp';

@Injectable()
export class LastestNewsService {
  constructor(
    @InjectRepository(LastestNewsEntity)
    private readonly LastestNewsTypeRepository: Repository<LastestNewsEntity>,
  ) {}

  public async buildNews(lastestNews: LastestNews): Promise<LastestNewsEntity> {
    const uuid: string = uuidv4();
    // let compressedImage;

    // console.log('lastestNews.news_image', lastestNews);
    // const compressedImage = await sharp(lastestNews.news_image)
    //   .resize(1024) // 调整图片宽度为 1024px，高度自适应
    //   .jpeg({ quality: 80 }) // 设置压缩质量
    //   .toBuffer(); // 将处理后的图片输出为 Buffer

    const news = new LastestNewsEntity();
    news.news_id = uuid;

    news.news_title = lastestNews.news_title;
    news.news_date = lastestNews.news_date;
    news.news_content = lastestNews.news_content;
    news.news_type = lastestNews.news_type;

    // 根据提供的数据类型决定如何处理图片
    if (lastestNews.news_image) {
      news.news_image = lastestNews.news_image; // 如果有Buffer数据
    }
    if (lastestNews.news_image_url) {
      news.news_image_url = lastestNews.news_image_url; // 如果有图片URL
    }

    return await this.LastestNewsTypeRepository.save(news);
  }

  // public async getNews();
}
