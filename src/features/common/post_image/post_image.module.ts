import { Module } from '@nestjs/common';
import { PostImageService } from './post_image.service';
import { PostImageController } from './post_image.controller';

@Module({
  providers: [PostImageService],
  controllers: [PostImageController]
})
export class PostImageModule {}
