import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraType } from './entity/get/camera_type/camera_type';

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
        username: configService.get('USER_USERNAME'),
        password: configService.get('USER_PA$$WORD'),
        entities: [CameraType],
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
