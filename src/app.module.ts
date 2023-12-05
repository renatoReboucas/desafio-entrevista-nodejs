import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './modules/company.module';
import { VehiclesModule } from './modules/vehicles.module';
import { AccessControlModule } from './modules/accessControl.module';

@Module({
  imports: [DatabaseModule, CompanyModule, VehiclesModule, AccessControlModule],
  providers: [AppService],
})
export class AppModule {}
