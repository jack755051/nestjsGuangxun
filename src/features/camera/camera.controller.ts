import { Controller, Get } from '@nestjs/common';
import { CameraService } from './camera.service';

@Controller('camera')
export class CameraController {
  constructor(private readonly CameraService: CameraService) {}

  @Get()
  async getCamera() {
    return await this.CameraService.findCameraType();
  }
}
