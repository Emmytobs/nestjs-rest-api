import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import * as joi from "joi";

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(
    private schema: joi.ObjectSchema<any>,
    private errorMsg?: string,
  ) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(this.errorMsg || "Validation failed");
    }
  }
}
