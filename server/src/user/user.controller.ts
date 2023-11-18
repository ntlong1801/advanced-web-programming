import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';

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

  @UseGuards(AuthGuard)
  @Post('changeProfile')
  async changeProfile(@Body() changeProfileDTO: Record<string, any>) {
    return await this.userService.updateUser(
      changeProfileDTO.username,
      changeProfileDTO.fullName,
      changeProfileDTO.email,
    );
  }
}
