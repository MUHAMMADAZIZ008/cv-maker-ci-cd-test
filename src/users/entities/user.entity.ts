import { Role } from 'src/roles/entities/role.entity';
import { IUserActive } from 'src/utils/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  about_text: string;

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role_id: string;

  @Column({
    type: 'enum',
    enum: IUserActive,
    default: IUserActive.INACTIVE,
  })
  is_active: IUserActive;
}
