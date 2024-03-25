import { Module } from '@nestjs/common';
import { DownloadProductPdfController } from './download-product-pdf.controller';
import { DownloadProductPdfService } from './download-product-pdf.service';

@Module({
  controllers: [DownloadProductPdfController],
  providers: [DownloadProductPdfService]
})
export class DownloadProductPdfModule {}
