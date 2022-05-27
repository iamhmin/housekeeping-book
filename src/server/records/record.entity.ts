import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RecordType } from "./record-type.enum";

@Entity()
export class Record extends BaseEntity {
    @PrimaryGeneratedColumn()
    no: number;

    @Column()
    createdDate: Date;

    @Column()
    type: RecordType;

    @Column()
    amount: number;

    @Column()
    remark: string;
}