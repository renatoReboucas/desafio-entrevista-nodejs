import { Module } from '@nestjs/common';
import { CompanyController } from './../controller/company/company.controller';

@Module({
  controllers: [CompanyController],
})
export class CompanyModule {}
