import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    board_type: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    reg_id:string;

    @CreateDateColumn()
    reg_dt:Date;

    @UpdateDateColumn()
    mdfr_dt:Date;

}
