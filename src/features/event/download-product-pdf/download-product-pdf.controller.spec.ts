import { Test, TestingModule } from '@nestjs/testing';
import { DownloadProductPdfController } from './download-product-pdf.controller';

describe('DownloadProductPdfController', () => {
  let controller: DownloadProductPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownloadProductPdfController],
    }).compile();

    controller = module.get<DownloadProductPdfController>(DownloadProductPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
