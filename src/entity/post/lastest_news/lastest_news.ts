import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class LastestNewsEntity {
    @PrimaryGeneratedColumn()
    news_id: string;

    @Column()
    news_title: string;

    @Column()
    news_date: Date;

    @Column()
    news_content: string;
}
