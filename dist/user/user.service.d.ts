import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByUsername(username: string): Promise<User | undefined>;
    createUser(username: string, password: string, fullName: string, email: string): Promise<User>;
    updateUser(username: string, fullname: string, email: string, password: string | null): Promise<User>;
}
