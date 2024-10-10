import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { RequestDto } from 'src/app.controller';

@Injectable()
export class ValidationPipe implements PipeTransform<RequestDto, any> {
  async transform(value: RequestDto, metadata: ArgumentMetadata) {
    console.log('value', typeof value);
    if (!value.name || value.name === '') {
      // console.log('new value', value);
      // throw new BadRequestException('Name cannot be empty'); // Validate request
    }
    return value;
  }
}
