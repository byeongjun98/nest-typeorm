import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('board')
export class Board {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text' })
    content: string;

    // 작성일시
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    // 수정일시
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    // 게시판 종류
    @Column({ type: 'enum', enum: ['QNA', 'NOTICE', 'FREE'], default: 'FREE' })
    boardType: string;

    // 작성자 ID
    @Column({ type: 'uuid' })
    authorId: string;
}
