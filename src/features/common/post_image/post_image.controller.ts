import { Controller, Post, Query, UploadedFile } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostImageService } from './post_image.service';

@Controller('post-image')
@ApiTags('上傳')
export class PostImageController {
  constructor(private postImageService: PostImageService) {}

  @Post('upload_image')
  @ApiOperation({ summary: '新增圖檔' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ schema: { type: 'object', properties: {} } })
  async UploadImage(@UploadedFile('file') file: Express.Multer.File) {
    console.log('file', file);
  }
}
