import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: { name: string }): { message: string } {
    return this.appService.sayHello(data.name);
  }

  @GrpcMethod('HelloService', 'SayHi')
  sayHi(data: { name: string }): { message: string } {
    return this.appService.sayHi(data.name);
  }
}
