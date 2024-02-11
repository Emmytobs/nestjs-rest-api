import { Injectable } from "@nestjs/common";
import { SignUpDTO } from "./user.dto";

@Injectable()
export class UserService {
  signUp(dto: SignUpDTO) {
    return { msg: "User signed up" };
  }

  signIn() {
    return { msg: "User signed up" };
  }
}
