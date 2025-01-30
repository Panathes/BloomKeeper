
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../Entities/Users/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(name: string, email: string): Promise<Users> {
    const article = this.usersRepository.create({ name, email });
    return await this.usersRepository.save(article);
  }

  async findAll(): Promise<Users[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

//   async update(id: number, name: string, email: string): Promise<User> {
//     const article = await this.usersRepository.findOne(id);
//     if (article) {
//       article.name = name;
//       article.email = email;
//       return await this.usersRepository.save(article);
//     }
//   } 

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
