import { IsArray, IsString } from 'class-validator';

export class AccessControlSchema {
  // @IsString()
  // company: string;

  // @IsString()
  // vehicle: string;

  @IsString()
  dateEntry: string;

  @IsString()
  ExitDate: string;

  @IsArray()
  company;

  @IsArray()
  vehicle;
}
