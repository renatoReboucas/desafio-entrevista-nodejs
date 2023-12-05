import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiclesModel } from 'src/models/vehicles.model';
import { VehiclesSchema } from 'src/schemas/vehicles.schemas';
import { Repository } from 'typeorm';

@Controller('/vehicles')
export class VehiclesController {
  constructor(
    @InjectRepository(VehiclesModel) private model: Repository<VehiclesModel>,
  ) {}
  @Post()
  public async create(
    @Body() body: VehiclesSchema,
  ): Promise<{ data: VehiclesModel }> {
    const company = await this.model.save(body);
    return { data: company };
  }
  @Get()
  public async findAll(): Promise<{ data: VehiclesModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
  @Get(':uuid')
  public async findOne(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<{ data: VehiclesModel }> {
    const company = await this.model.findOneOrFail({ where: { uuid } });
    return { data: company };
  }

  @Put(':uuid')
  public async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() body: VehiclesSchema,
  ): Promise<{ data: VehiclesModel }> {
    const company = await this.model.findOneOrFail({ where: { uuid } });
    if (!company) {
      throw new NotFoundException(`Não achei o uuid: ${uuid} informado.`);
    }
    await this.model.update({ uuid }, body);
    return { data: await this.model.findOne({ where: { uuid } }) };
  }

  @Delete(':uuid')
  public async remove(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<{ data: string }> {
    const company = await this.model.findOneOrFail({ where: { uuid } });
    if (!company) {
      throw new NotFoundException(`Não achei o uuid: ${uuid} informado.`);
    }
    await this.model.delete({ uuid });
    return { data: `A empresa ${uuid} foi removida com sucesso!` };
  }
}
