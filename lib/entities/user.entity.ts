import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Roles } from '../enums'
import { BaseEntity } from '.'

@Entity( 'user' )
export class UserEntity extends BaseEntity {

    @Column( { type: 'varchar', nullable: false } )
    name: string

    @Column( { type: 'varchar', nullable: false, unique: true } )
    email: string

    @Column( { type: 'varchar', nullable: false } )
    password: string

    @Column( 'enum', { enum: Roles, nullable: false } )
    role: Roles

}
