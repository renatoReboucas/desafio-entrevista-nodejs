import { Controller, Get, Post } from '@nestjs/common';

@Controller('/company')
export class CompanyController {
  @Post()
  public create(): any {
    return 'create company';
  }
  @Get()
  public index(): any {
    return 'index company';
  }
}
