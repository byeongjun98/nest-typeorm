import {Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn} from "typeorm";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    birth: Date;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    position: string;

    @UpdateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @VersionColumn()
    version: number;


}
