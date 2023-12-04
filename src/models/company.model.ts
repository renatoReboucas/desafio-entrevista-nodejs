import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyModel {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column('int')
  cnpj: number;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column('int')
  numberMotocycles: number;

  @Column('int')
  numberCars: number;
}
