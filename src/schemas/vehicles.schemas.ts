import { IsString } from 'class-validator';

export class VehiclesSchema {
  @IsString()
  Brand: string;

  @IsString()
  Model: string;

  @IsString()
  Color: string;

  @IsString()
  Plate: string;

  @IsString()
  Type: string;
}
