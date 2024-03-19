import {
    Controller,
    Post,
    Body,
    UseInterceptors,
    UploadedFile,
    Req, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Get,
} from '@nestjs/common';
import {LastestNewsEntity} from '../../entity/lastest_news/lastest_news';
import {LastestNewsService} from './lastest_news.service';
import {getLastestNews, LastestNews} from '../../common/interface/lastest_news.interface';
import {ApiTags, ApiOperation, ApiBody, ApiConsumes} from '@nestjs/swagger';
import {CreateLastestNewsDto} from '../../dto/create-lastest-news.dto';
import {FileInterceptor} from '@nestjs/platform-express';
import {Request, Express} from 'express';
import {TestEntity} from "../../entity/post/test/test";
import {TestDto} from "../../dto/test.dto";
import {GetLastestNewDto} from "../../dto/lastest_news/get-lastest-new-dto/get-lastest-new-dto"; // 导入Request

@Controller('lastest-news')
@ApiTags('新增')
export class LastestNewsController {
    constructor(private lastestNewsService: LastestNewsService) {
    }

    @Post('upload')
    @ApiOperation({summary: '新增最新消息'})
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                news_title: {type: 'string'},
                news_type: {
                    type: 'string',
                    enum: ['新聞快訊', '活動消息', '知識分享'],
                },
                news_date: {type: 'string', format: 'date-time'},
                news_content: {type: 'string'},
                file: {
                    type: 'string',
                    format: 'binary', // 指定为二进制格式
                },
            },
        },
    })
    async createLastestNews(
        @UploadedFile('file') file: Express.Multer.File,
        @Body() createLastestNewsDto: CreateLastestNewsDto,
    ): Promise<LastestNewsEntity> {
        console.log("file", file);
        // const {news_title, news_type, news_date, news_content} = req.body;
        const {news_title, news_type, news_date, news_content} = createLastestNewsDto;
        const newNews: LastestNews = {
            news_title,
            news_type,
            news_date: new Date(news_date), // 确保这里正确地处理了日期
            news_content,
            news_image: file.buffer, // 假设你想使用上传的文件
        };

        console.log('bbb', newNews);

        return this.lastestNewsService.buildNews(newNews);
    }

    @Get('getNews')
    @ApiOperation({summary: '取得最新消息'})
    @ApiConsumes('application/json')
    @ApiBody({
        type: GetLastestNewDto,
        schema: {
            description: '透過type取得前x個結果',
        }
    })
    async getLastestNews(req: getLastestNews) {

    }

    //測試檔案上傳
    @Post('upload-image')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'List of cats',
        type: TestDto,
    })
    async uploadFile(
        @UploadedFile('file') file: Express.Multer.File
    ) {
        console.log("file", file);
    }


}
