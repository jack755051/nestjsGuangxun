//建立產品列表
export interface buildProduct {
  product_name: string;
  product_id: string;
  category: Category;
  product_price: number;
}

export enum Category {
  Camera = '攝像頭',
  Host = '主機',
  Switch = '交換機',
  LicenseRecognition = '車牌辨識',
  AntiTheft = '防盜',
  Other = '其他',
}
