import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User {

  @PrimaryGeneratedColumn({
    name: "id_user"
  })
  id: number

  @Column({
    length: 100,
  })
  username: string

  @Column({
    length: 100,
  })
  password: string

  @Column({
    length: 100,
  })
  email: string
}