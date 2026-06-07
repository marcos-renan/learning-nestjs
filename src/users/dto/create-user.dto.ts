import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  password!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;
}