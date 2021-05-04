import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}
