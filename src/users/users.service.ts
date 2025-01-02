import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createHashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const currnetUserEmail = await this.findByEmail(createUserDto.email);

    if (currnetUserEmail) {
      throw new BadRequestException('email already exsit!');
    }
    const hashPassoword = await createHashPassword(createUserDto.password);
    createUserDto.password = hashPassoword;
    const newUser = await this.userRepository.save(createUserDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const userEmail = await this.userRepository.findOneBy({ email });
    return userEmail;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return await this.userRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<string> {
    await this.userRepository.delete(id);
    return 'user has been deleted';
  }
}
