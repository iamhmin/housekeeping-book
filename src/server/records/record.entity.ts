import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RecordType } from './record-type.enum';
import { User } from '../users/user.entity';

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

  @Column()
  uid: number;
}
