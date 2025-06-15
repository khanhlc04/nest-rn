import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
    @IsMongoId()
    @IsNotEmpty()
    _id: string

    @IsOptional()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @IsOptional()
    address: string;

    @IsOptional()
    image: string;
}
