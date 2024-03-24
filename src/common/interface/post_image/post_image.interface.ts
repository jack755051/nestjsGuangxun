export interface PostImageITF {
  image_name: string;
  image_type: imageType;
  image_file: Buffer;
}

export enum imageType {
  CarouselImage = '輪播圖',
}
