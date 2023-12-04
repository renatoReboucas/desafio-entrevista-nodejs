import { Module } from '@nestjs/common';
import { CompanyController } from './../controller/company/company.controller';
import { CompanyModel } from '../models/company.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyModel])],
  controllers: [CompanyController],
})
export class CompanyModule {}
