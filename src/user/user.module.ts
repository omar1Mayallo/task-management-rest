import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { BcryptModule } from 'src/shared/services/bcrypt/bcrypt.module';
import { JwtModule } from 'src/shared/services/jwt/jwt.module';
import { CloudinaryModule } from 'src/shared/services/cloudinary/cloudinary.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule, BcryptModule, CloudinaryModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
