"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const user_entity_1 = require("./user/user.entity");
exports.config = {
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'AWP_BE',
    synchronize: true,
    entities: [user_entity_1.User],
};
//# sourceMappingURL=orn.config.js.map