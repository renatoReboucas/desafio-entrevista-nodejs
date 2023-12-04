import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyModel } from 'src/models/company.model';
import { Repository } from 'typeorm';

@Controller('/company')
export class CompanyController {
  constructor(
    @InjectRepository(CompanyModel) private model: Repository<CompanyModel>,
  ) {}
  @Post()
  public create(@Body() bosy:): any {
    return 'create company';
  }
  @Get()
  public async index(): Promise<{ data: CompanyModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
}
