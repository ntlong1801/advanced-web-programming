import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private validatePassword;
    signup(username: string, password: string, fullName: string, email: string): Promise<{
        msg: string;
        accessToken?: undefined;
    } | {
        accessToken: string;
        msg?: undefined;
    }>;
    signIn(username: string, pass: string): Promise<{
        user: import("../user/user.entity").User;
        access_token: string;
        msg?: undefined;
    } | {
        msg: string;
        user?: undefined;
        access_token?: undefined;
    }>;
}
