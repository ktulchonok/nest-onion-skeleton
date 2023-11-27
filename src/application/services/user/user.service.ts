import { USER_REPOSITORY_TOKEN } from '@domain/constants';
import { IUserRepository } from '@domain/interfaces';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}
}
