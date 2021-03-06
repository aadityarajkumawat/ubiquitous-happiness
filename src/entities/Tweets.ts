import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@ObjectType()
@Entity()
export class Tweet extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    tweet_id!: number;

    @Field()
    @Column({ length: 100 })
    tweet_content!: string;

    @Field(() => String)
    @CreateDateColumn()
    created_At: string;

    @Field()
    @Column()
    _type!: string;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    likes: number;

    @Field()
    @Column()
    comments: number;

    @Field()
    @Column()
    img: string;

    // Relations
    @ManyToOne(() => User, (user) => user.tweets)
    user: User;

    @OneToMany(() => Like, (like) => like.tweet, {
        cascade: ["insert", "remove", "update"],
    })
    like: Like[];

    @OneToMany(() => Comment, (comment) => comment.tweet, {
        cascade: ["insert", "remove", "update"],
    })
    comment: Comment[];
}

@ObjectType()
@Entity()
export class Like extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    like_id!: number;

    @Field(() => String)
    @CreateDateColumn()
    created_At = new Date();

    @Field()
    @Column()
    user_id!: number;

    @Field()
    @Column()
    like_on_id!: number;

    @Field()
    @Column()
    like_on!: string;

    @ManyToOne(() => Tweet, (tweet) => tweet.like)
    tweet: Tweet;
}
