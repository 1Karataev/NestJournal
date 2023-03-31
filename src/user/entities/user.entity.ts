import { Column, Model, Table } from 'sequelize-typescript';
import { IsEmail } from 'class-validator';

@Table
export class User extends Model {
  @Column
  id: number;

  @Column
  fullName: string;

  @Column
  @IsEmail()
  email: string;

  @Column
  password: string;
}
