import { Module } from '@nestjs/common';
import { CameraService } from './camera.service';
import { CameraController } from './camera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CameraType } from '../../entity/camera_type/camera_type';

@Module({
  imports: [TypeOrmModule.forFeature([CameraType])],
  providers: [CameraService],
  controllers: [CameraController],
  exports: [CameraService],
})
export class CameraModule {}
