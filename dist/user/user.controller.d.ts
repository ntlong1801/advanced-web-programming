import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(username: string): Promise<import("./user.entity").User | {
        message: string;
    }>;
    changeProfile(changeProfileDTO: Record<string, any>): Promise<import("./user.entity").User>;
}
