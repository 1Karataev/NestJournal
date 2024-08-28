import {Injectable, NotFoundException} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(
      @InjectRepository(Post)
      private repository: Repository<Post>,
  ) {}
  create(createPostDto: CreatePostDto) {
    return this.repository.save(createPostDto);
  }

  findAll() {
    //test main
    return this.repository.find();
  }

  async findOne(id: number) {
    const post = await this.repository.findOne(id);
    if(!post) {
      return new NotFoundException('Статья не найдена')
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post =  await this.repository.update(id, updatePostDto);
    if(!post) {
      return new NotFoundException('Статья не найдена')
    }
    return post
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
