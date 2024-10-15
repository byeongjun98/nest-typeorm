import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_table')
export class Member {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'username', unique: true })
    username: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'phone' })
    phone: string;

    @Column({ name: 'birth_date' })
    birth_date: Date;

    @Column({ name: 'password' })
    password: string;

    @Column({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ name: 'email', nullable: true })
    email?: string;

    @Column({ name: 'address', nullable: true })
    address?: string;

    @Column({ name: 'status', default: 'active' })
    status: string;
}
