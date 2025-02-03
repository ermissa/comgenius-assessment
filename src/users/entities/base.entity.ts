import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ type: 'datetime' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  readonly updatedAt!: Date;

  @DeleteDateColumn({ type: 'datetime' })
  deletedAt!: Date;
}
