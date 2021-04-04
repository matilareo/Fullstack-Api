import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field , ObjectType} from "type-graphql";


@Entity()
@ObjectType()
export class Post extends BaseEntity{

  @Field(()=> String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(()=> String)
  @Column()
  title!: string;

  @Field(()=> String)
  @CreateDateColumn({type: 'timestamp'})
  createdAt!: string;
}