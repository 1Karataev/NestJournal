import {IsEmail, Length} from "class-validator";

export class CreateUserDto {
    fullName: string;

    @IsEmail()
    email: string;
    @Length(6)
    password?: string;
}
