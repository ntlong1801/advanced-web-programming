import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}


  // on fixing ...
  @Get(':username')
  async findOne(@Param('username') username: string) {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }
}
