import { PrimaryGeneratedColumn, CreateDateColumn, Index, UpdateDateColumn } from 'typeorm'

export class BaseEntity {

    @PrimaryGeneratedColumn( 'uuid' )
    id: string

    @UpdateDateColumn()
    @Index()
    updatedAt: Date

    @CreateDateColumn()
    createdAt: Date

}
