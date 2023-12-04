import { IsInt, IsString, MaxLength, Min } from 'class-validator';

export class CompanySchema {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsInt()
  cnpj: number;

  @IsString()
  @MaxLength(255)
  address: string;

  @IsString()
  @MaxLength(255)
  phone: string;

  @IsInt()
  @Min(1)
  numberMotocycles: number;

  @IsInt()
  @Min(1)
  numberCars: number;
}
