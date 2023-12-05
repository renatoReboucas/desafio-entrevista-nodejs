import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessControlModel } from 'src/models/accessControl.model';
import { AccessControlController } from 'src/controller/accessControl/accessControl.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccessControlModel])],
  controllers: [AccessControlController],
})
export class AccessControlModule {}
