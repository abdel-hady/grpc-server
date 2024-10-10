import { BadRequestException } from '@nestjs/common';
import { ValidationPipe } from './common/pipes/validation.pipe';

describe('ValidationPipe', () => {
  let validationPipe: ValidationPipe;

  beforeEach(() => {
    validationPipe = new ValidationPipe();
  });

  it('should throw an error if name is empty', () => {
    expect(() => validationPipe.transform({ name: '' })).toThrow(
      BadRequestException,
    );
  });

  it('should return the value if name is valid', () => {
    const data = { name: 'JohnCIA' };
    expect(validationPipe.transform(data)).toEqual(data);
  });
});
