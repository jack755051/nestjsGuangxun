import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CameraType} from './entity/camera_type/camera_type';
import {LastestNewsEntity} from './entity/lastest_news/lastest_news';

import {CameraModule} from './features/camera/camera.module';
import {LastestNewsModule} from './features/lastest_news/lastest_news.module';
import {TestEntity} from './entity/post/test/test';
import {PostImageModule} from './features/common/post_image/post_image.module';
import {PostImageEntity} from "./entity/common/post_image/post_image";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
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
                entities: [CameraType, LastestNewsEntity, TestEntity, PostImageEntity],
                synchronize: true,
            }),
        }),
        CameraModule,
        LastestNewsModule,
        PostImageModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
