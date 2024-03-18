import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { LastestNewsEntity } from '../../entity/post/lastest_news/lastest_news';
import { LastestNewsService } from './lastest_news.service';
import { LastestNews } from '../../common/interface/lastest_news.interface';
import { ApiTags, ApiOperation, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { CreateLastestNewsDto } from '../../dto/create-lastest-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express'; // 导入Request

@Controller('lastest-news')
@ApiTags('新增')
export class LastestNewsController {
  constructor(private lastestNewsService: LastestNewsService) {}

  @Post('upload')
  @ApiOperation({ summary: '新增最新消息' })
  @UseInterceptors(FileInterceptor('news_image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        news_title: { type: 'string' },
        news_type: {
          type: 'string',
          enum: ['新聞快訊', '活動消息', '知識分享'],
        },
        news_date: { type: 'string', format: 'date-time' },
        news_content: { type: 'string' },
        news_image: {
          type: 'string',
          format: 'binary', // 指定为二进制格式
        },
      },
    },
  })
  async createLastestNews(
    @UploadedFile('news_image') file: Express.Multer.File,
    @Req() req: Request,
  ): Promise<LastestNewsEntity> {
    const { news_title, news_type, news_date, news_content } = req.body;
    const newNews: LastestNews = {
      news_title,
      news_type,
      news_date: new Date(news_date), // 确保这里正确地处理了日期
      news_content,
      news_image: file?.buffer, // 假设你想使用上传的文件
    };

    console.log('bbb', newNews);

    return this.lastestNewsService.buildNews(newNews);
  }
}
