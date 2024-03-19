import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastestNewsEntity } from '../../entity/lastest_news/lastest_news';
import { LastestNewsService } from './lastest_news.service';
import { LastestNewsController } from './lastest_news.controller';
import { TestEntity } from '../../entity/post/test/test';
import { GetLastestNewsEntity } from '../../entity/lastest_news/get-lastest_news/get-lastest_news';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LastestNewsEntity,
      TestEntity,
      GetLastestNewsEntity,
    ]),
  ],
  providers: [LastestNewsService],
  controllers: [LastestNewsController],
  exports: [LastestNewsService],
})
export class LastestNewsModule {}
