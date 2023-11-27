import { IUser } from '../entities';
import { IRepository } from './repository.interface';

export interface IUserRepository extends IRepository<IUser> {
  getByEmail(email: string): Promise<IUser>;
}
