import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 20,
    nullable: false,
    unique: true
  })
  name!: string;

  @Column({
    length: 50,
    nullable: false
  })
  password!: string;
  
  @CreateDateColumn()
  createdAt!: Date;
      
  @UpdateDateColumn()
  updatedAt!: Date;

}

