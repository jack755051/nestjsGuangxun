import {Column, Entity, PrimaryColumn} from 'typeorm';
import {imageType} from '../../../common/interface/post_image/post_image.interface';
import {newsType} from "../../../common/interface/lastest_news.interface";

@Entity()
export class PostImageEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    image_name: string;

    @Column({
        type: 'enum',
        enum: imageType,
    })
    image_type: imageType;

    @Column({type: 'mediumblob', nullable: true})
    image_file: Buffer;
}
