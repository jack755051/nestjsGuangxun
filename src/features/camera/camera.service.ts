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
    //取得所有
    // 查询 camera_type 表
    const cameraTypes = await this.cameraTypeRepository.query(`
      SELECT camera_chinese AS productTypeShowName , camera_english AS productValue
      FROM guangxun.camera_type
      WHERE camera_english IN ('Bullet Camera', 'Hemispheric Dome Camera', 'Speed Dome Camera', 'Under Water Camera', 'Panoramic Camera')
    `).then(items => items.map(item => ({ ...item, mainProductType: '攝影機' })));

    // 查询 host_type 表
    const hostTypes = await this.cameraTypeRepository.query(`
      SELECT host_chinese AS productTypeShowName , host_english AS productValue
      FROM guangxun.host_type
    `).then(items => items.map(item => ({ ...item, mainProductType: '主機' })));

    // 查询 other_type 表
    const otherTypes = await this.cameraTypeRepository.query(`
      SELECT other_chinese AS productTypeShowName , other_english AS productValue
      FROM guangxun.other_type
    `).then(items => items.map(item => ({ ...item, mainProductType: '其他產品' })));

    const reslut = [...cameraTypes, ...hostTypes, ...otherTypes].map((item) => ({
      productValue: item.productValue,
      productTypeShowName: item.productTypeShowName,
      mainProductType: item.mainProductType,
    }));

    return reslut;

  }
}
