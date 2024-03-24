import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostImageEntity } from '../../../entity/common/post_image/post_image';
import { Repository } from 'typeorm';
import { PostImageDto } from '../../../dto/common/post_image/post_image';
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import {PostImageITF} from "../../../common/interface/post_image/post_image.interface";

@Injectable()
export class PostImageService {
  constructor(
    @InjectRepository(PostImageEntity)
    private readonly postImageRepository: Repository<PostImageEntity>,
  ) {}

  public async postImage(req: PostImageITF): Promise<PostImageEntity> {
    const uuid: string = uuidv4();

    const compressedImage = await sharp(req.image_file)
      .resize(1024) // 调整图片宽度为 1024px，高度自适应
      .jpeg({ quality: 80 }) // 设置压缩质量
      .toBuffer(); // 将处理后的图片输出为 Buffer;

    const postImage = new PostImageEntity();

    postImage.id = uuid;
    postImage.image_type = req.image_type;
    postImage.image_name = req.image_name;
    postImage.image_file = compressedImage;

    return await this.postImageRepository.save(postImage);
  }
}
