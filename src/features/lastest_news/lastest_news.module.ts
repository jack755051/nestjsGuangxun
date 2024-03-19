import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastestNewsEntity } from '../../entity/lastest_news/lastest_news';
import { LastestNewsService } from './lastest_news.service';
import { LastestNewsController } from './lastest_news.controller';
import {TestEntity} from "../../entity/post/test/test";

@Module({
  imports: [TypeOrmModule.forFeature([LastestNewsEntity,TestEntity])],
  providers: [LastestNewsService],
  controllers: [LastestNewsController],
  exports: [LastestNewsService],
})
export class LastestNewsModule {}
