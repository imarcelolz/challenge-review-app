import { Predicate, QueryResult } from './Types'

export interface IQuery<Model> {
  First(predicate: Predicate<Model>): QueryResult<Model>;

  All(): QueryResult<Model[]>;

  Where(predicate: Predicate<Model>): IQuery<Model>;

  Values(): QueryResult<Model[]>;
}
