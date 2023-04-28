import {
  ArgumentMetadata,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
    });
    super.exceptionFactory = (errors: ValidationError[]) => {
      return new UnprocessableEntityException({
        message: 'VALIDATION_ERROR',
        validationErrors: super.flattenValidationErrors(errors),
      });
    };
  }
  async transform(value: any, metadata: ArgumentMetadata) {
    return await super.transform(value, metadata);
  }
}
