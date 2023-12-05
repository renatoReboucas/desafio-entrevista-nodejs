import {
  Column,
  Entity,
  OneToMany,
  // ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccessControlModel } from './accessControl.model';

@Entity()
export class VehiclesModel {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  Brand: string;

  @Column()
  Model: string;

  @Column()
  Color: string;

  @Column()
  Plate: string;

  @Column()
  Type: string;

  @OneToMany(() => AccessControlModel, (accessControl) => accessControl.vehicle)
  accessControl: AccessControlModel[];
}
