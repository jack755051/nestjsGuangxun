import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraType } from './entity/get/camera_type/camera_type';
import { LastestNewsEntity } from './entity/post/lastest_news/lastest_news';

import { CameraModule } from './features/camera/camera.module';
import { LastestNewsModule } from './features/lastest_news/lastest_news.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        database: configService.get('USER_DATABASE'),
        host: configService.get('USER_HOST'),
        port: +configService.get('USER_PORT'),
        username: configService.get('USER_NAME'),
        password: configService.get('USER_PASSWORD'),
        entities: [CameraType, LastestNewsEntity],
        synchronize: true,
      }),
    }),
    CameraModule,
    LastestNewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
