import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { PostModule } from './post/post.module';
import {Post} from "./post/entities/post.entity";


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tjournal',
      entities: [User, Post],
      synchronize: true,
      autoLoadEntities: true,
    }),UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
