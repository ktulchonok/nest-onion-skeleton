export interface IRepository<T> {
  getById(id: number): Promise<T>;
  getAll(): Promise<T[]>;
  remove(id: number): Promise<void>;
  create(dto: Partial<T>): Promise<T>;
  update(dto: Partial<T>): Promise<T>;
}
