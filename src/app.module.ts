import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './modules/company.module';

@Module({
  imports: [DatabaseModule, CompanyModule],
  providers: [AppService],
})
export class AppModule {}
