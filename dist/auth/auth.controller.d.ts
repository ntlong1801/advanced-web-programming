import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        user: import("../user/user.entity").User;
        access_token: string;
        msg?: undefined;
    } | {
        msg: string;
        user?: undefined;
        access_token?: undefined;
    }>;
    login(req: any): Promise<{
        msg: string;
        accessToken?: undefined;
    } | {
        accessToken: string;
        msg?: undefined;
    }>;
    logout(req: any): Promise<{
        msg: string;
    }>;
    getProfile(req: any): any;
}
