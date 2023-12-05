import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
  public async create(
    @Body() body: CompanySchema,
  ): Promise<{ data: CompanyModel }> {
    const company = await this.model.save(body);
    return { data: company };
  }
  @Get()
  public async findAll(): Promise<{ data: CompanyModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
  @Get()
  public async findOne() {
    return `This action returns a  company`;
  }

  @Put()
  public async update() {
    return `This action updates a  company`;
  }

  @Delete()
  public async remove() {
    return `This action removes a  company`;
  }
}
