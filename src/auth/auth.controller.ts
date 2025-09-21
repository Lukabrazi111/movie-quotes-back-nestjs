import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
    constructor() {}

    @Post('register')
    async registerUser() {
        return 'register users';
    }
}
