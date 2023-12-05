import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AccessControlModel } from './accessControl.model';

@Entity()
export class CompanyModel {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column('bigint', { width: 20 })
  cnpj: number;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column('int')
  numberMotocycles: number;

  @Column('int')
  numberCars: number;

  @OneToMany(() => AccessControlModel, (accessControl) => accessControl.company)
  accessControl: AccessControlModel[];
}
