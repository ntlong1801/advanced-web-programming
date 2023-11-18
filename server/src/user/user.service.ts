import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: username } });
  }

  async createUser(
    username: string,
    password: string,
    fullName: string,
    email: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      fullName,
      email,
    });
    return this.userRepository.save(user);
  }

  async updateUser(
    username: string,
    fullname: string,
    email: string,
  ): Promise<User> {
    // Find the user by username
    const user = await this.findByUsername(username);

    // If the user is not found, throw a NotFoundException
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    // Update the user's properties
    user.fullName = fullname;
    user.email = email;

    // Save the updated user to the database
    return this.userRepository.save(user);
  }
}
