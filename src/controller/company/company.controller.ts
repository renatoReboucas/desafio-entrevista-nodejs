import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyModel } from 'src/models/company.model';
import { CompanySchema } from 'src/schemas/company.schemas';
import { Repository } from 'typeorm';

@Controller('/company')
export class CompanyController {
  constructor(
    @InjectRepository(CompanyModel) private model: Repository<CompanyModel>,
  ) {}
  @Post()
  public async create(@Body() body: CompanySchema): Promise<any> {
    console.log(body);
    const company = await this.model.save(body);
    return company;
  }
  @Get()
  public async index(): Promise<{ data: CompanyModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
}
