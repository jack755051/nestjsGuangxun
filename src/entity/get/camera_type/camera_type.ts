import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CameraType {
  @PrimaryGeneratedColumn()
  camera_id: number;
  @Column()
  camera_english: string;
  @Column()
  camera_chinese: string;
}
