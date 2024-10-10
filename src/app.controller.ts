import { Controller, UseGuards, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AuthGuard } from './common/guards/auth.guard';
import { ValidationPipe } from './common/pipes/validation.pipe';

export class RequestDto {
  name: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('HelloService', 'SayHello')
  // @UsePipes(new ValidationPipe())
  sayHello(data: { name: string }): { message: string } {
    return this.appService.sayHello(data.name);
  }

  // @UseGuards(AuthGuard)
  @GrpcMethod('HelloService', 'SayHi')
  @UsePipes(new ValidationPipe())
  sayHi(data: RequestDto): { message: string } {
    return this.appService.sayHi(`${data.name}`);
  }
}
