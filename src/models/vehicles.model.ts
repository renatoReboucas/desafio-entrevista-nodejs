import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
