import { RecordType } from "../record-type.enum";

export class CreateRecordDto {
   type: RecordType;
   amount: number;
   remark: string;
   createdDate: Date;
  }