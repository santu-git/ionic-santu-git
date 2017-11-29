import { Result } from './result.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('activity')
export class Activity {

  /* Columns */
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({nullable: true})
  note: string;

  /* :has_many relations */
  @OneToMany(type=> Result, result=>result.activity,{
    cascadeInsert: true,
    cascadeUpdate: true,
  })
  results: Result[] = [];
}
