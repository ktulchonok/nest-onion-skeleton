import { IItem } from '../entities';
import { IRepository } from './repository.interface';

export interface IItemRepository extends IRepository<IItem> {
  getByName(name: string): Promise<IItem>;
}
