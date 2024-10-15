import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'custom') {
      return value;
    }
    if (!value.name || value.name === '') {
      throw new RpcException('Name cannot be empty');
    }
    return value;
  }
}
