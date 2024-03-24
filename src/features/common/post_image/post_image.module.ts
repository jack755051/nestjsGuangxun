import { Module } from '@nestjs/common';
import { PostImageService } from './post_image.service';
import { PostImageController } from './post_image.controller';
import {CameraService} from "../../camera/camera.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostImageEntity} from "../../../entity/common/post_image/post_image";

@Module({
  imports:[TypeOrmModule.forFeature([PostImageEntity])],
  providers: [PostImageService],
  controllers: [PostImageController],
  exports: [PostImageService],
})
export class PostImageModule {}
