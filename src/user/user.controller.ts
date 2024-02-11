import { Body, Controller, Post } from "@nestjs/common";
import { BaseController } from "src/shared/core/BaseController";
import { ValidationPipe } from "src/shared/core/ValidationPipe";
import { SignUpDTO } from "./user.dto";
import { UserService } from "./user.service";
import { userValidation } from "./user.validation";

@Controller("user")
export class UserController extends BaseController {
  constructor(private userService: UserService) {
    super();
  }
  @Post("signup")
  signUp(@Body(new ValidationPipe(userValidation.signUp.body)) dto: SignUpDTO) {
    return this.userService.signUp(dto);
  }
}
