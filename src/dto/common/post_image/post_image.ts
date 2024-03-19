import { ApiProperty } from '@nestjs/swagger';
import { imageType } from '../../../common/interface/post_image/post_image.interface';

export class PostImage {
  @ApiProperty()
  image_name: string;

  @ApiProperty()
  image_type: imageType;

  @ApiProperty({ type: 'mediumblob', nullable: true })
  image_file: Buffer;
}
