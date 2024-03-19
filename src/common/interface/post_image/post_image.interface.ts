export interface PostImage {
  image_name: string;
  image_type: imageType;
  image_file: any;
}

export enum imageType {
  CarouselImage = '輪播圖',
}
