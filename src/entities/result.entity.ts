import { Activity } from './activity.entity';
//import { Catalog } from './catalog.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('result')
export class Result {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  value: string;



  /* Relations */
  /* :belongs_to relations */
  @ManyToOne(type=>Activity, activity=> activity.results)
  @JoinColumn({name: "activity_id"})
  activity: Activity;
}
