import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastestNewsEntity } from '../../entity/post/lastest_news/lastest_news';
import { LastestNewsService } from './lastest_news.service';
import { LastestNewsController } from './lastest_news.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LastestNewsEntity])],
  providers: [LastestNewsService],
  controllers: [LastestNewsController],
  exports: [LastestNewsService],
})
export class LastestNewsModule {}
