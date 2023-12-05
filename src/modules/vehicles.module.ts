import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModel } from 'src/models/vehicles.model';
import { VehiclesController } from 'src/controller/vehicle/vehicles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehiclesModel])],
  controllers: [VehiclesController],
})
export class VehiclesModule {}
