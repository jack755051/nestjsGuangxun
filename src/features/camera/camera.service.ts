import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CameraType } from '../../entity/get/camera_type/camera_type';

@Injectable()
export class CameraService {
  constructor(
    @InjectRepository(CameraType)
    private readonly cameraTypeRepository: Repository<CameraType>,
  ) {

  }

  public async findCameraType() {
    return await this.cameraTypeRepository.find();
  }
}
