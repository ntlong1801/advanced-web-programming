import {
  Get,
  Post,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // [POST] localhost:3000/auth/login
  // Header: Content-Type: application/json
  // Body: { username : "username", password: "password" }
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // [POST] localhost:3000/auth/signup
  // Header: Content-Type: application/json
  // Body: { username : "username", password: "password" }
  @Post('signup')
  async login(@Request() req) {
    return this.authService.signup(
      req.body.username,
      req.body.password,
      req.body.fullName,
      req.body.email,
    );
  }

  // [POST] localhost:3000/auth/logout
  // Header: Authorization: "Bearer" + AccessToken
  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    // Implement logout logic (optional, depending on your requirements)
    return { msg: 'logout successfully!' };
  }

  // [POST] localhost:3000/auth/profile
  // Header: Authorization: "Bearer" + AccessToken
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
