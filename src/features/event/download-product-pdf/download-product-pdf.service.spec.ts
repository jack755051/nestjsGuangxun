import { Test, TestingModule } from '@nestjs/testing';
import { DownloadProductPdfService } from './download-product-pdf.service';

describe('DownloadProductPdfService', () => {
  let service: DownloadProductPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadProductPdfService],
    }).compile();

    service = module.get<DownloadProductPdfService>(DownloadProductPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
