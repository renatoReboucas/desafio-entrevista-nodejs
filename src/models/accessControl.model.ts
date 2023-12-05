import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyModel } from './company.model';
import { VehiclesModel } from './vehicles.model';

@Entity()
export class AccessControlModel {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => CompanyModel, (company) => company.accessControl)
  company: CompanyModel;

  @ManyToOne(() => VehiclesModel, (vehicle) => vehicle.accessControl)
  vehicle: VehiclesModel;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateEntry: string;

  @Column({ type: 'timestamp' })
  ExitDate: string;
}
