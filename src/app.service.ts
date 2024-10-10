import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(name: string): { message: string } {
    return { message: `Hello , ${name}!` };
  }
  sayHi(name: string): { message: string } {
    return { message: `Hello quys, ${name}` };
  }
}
