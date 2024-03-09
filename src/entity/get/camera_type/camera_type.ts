import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CameraType {
  @PrimaryColumn()
  camera_id: number;
  @Column()
  camera_english: string;
  @Column()
  camera_chinese: string;
}
