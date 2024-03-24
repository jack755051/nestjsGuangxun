import {Body, Controller, Post, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiBody, ApiConsumes, ApiOperation, ApiProperty, ApiTags} from '@nestjs/swagger';
import {PostImageService} from './post_image.service';
import {TestDto} from "../../../dto/test.dto";
import {PostImageEntity} from "../../../entity/common/post_image/post_image";
import {imageType, PostImageITF} from "../../../common/interface/post_image/post_image.interface";
import {PostImageDto} from "../../../dto/common/post_image/post_image";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('post-image')
@ApiTags('上傳')
export class PostImageController {
    constructor(private postImageService: PostImageService) {
    }

    @Post('upload_image')
    @ApiOperation({summary: '新增圖檔'})
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                image_type: {
                    type: 'string',
                    enum: ['輪播圖'],
                },
                image_name: {type: 'string'},
                file: {
                    type: 'string',
                    format: 'binary', // 指定为二进制格式
                },
            },
        },
    })
    async UploadImage(
        @UploadedFile('file') file: Express.Multer.File,
        @Body() postImageDto: PostImageDto
    ): Promise<PostImageEntity> {
        console.log('file1', file);
        const {image_name, image_type, image_file} = postImageDto;

        const result: PostImageITF = {
            image_name,
            image_type,
            image_file: file.buffer,
        }

        console.log('file', file);
        return this.postImageService.postImage(result)
    }
}
