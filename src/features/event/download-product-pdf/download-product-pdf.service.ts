import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class DownloadProductPdfService {
    constructor() {
    }

    public async downloadProductPDF(product_id:string){
        //1. 到DB product_list這張table找到該產品類型、產品型號
        //2. 透過產品型號將所有需要資料取得

    }
}
