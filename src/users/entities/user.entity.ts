import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column('simple-array')
  categories: number[];
}
