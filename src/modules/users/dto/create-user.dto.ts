import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsUrl, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @IsOptional()
    address: string;

    @IsOptional()
    image: string;
}
